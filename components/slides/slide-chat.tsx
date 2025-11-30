"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { GradientText } from "@/components/gradient-text"
import { Send, Bot, User, Sparkles, Loader2 } from "lucide-react"

interface SlideProps {
  isActive: boolean
  onNavigate?: (slideNumber: number) => void
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

// Simple markdown renderer component with table support
function MarkdownContent({ content }: { content: string }) {
  const renderMarkdown = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/g)
    
    return parts.map((part, index) => {
      if (part.startsWith("```") && part.endsWith("```")) {
        const codeContent = part.slice(3, -3)
        const firstLine = codeContent.split("\n")[0]
        const code = codeContent.includes("\n") 
          ? codeContent.slice(firstLine.length + 1) 
          : codeContent
        return (
          <pre key={index} className="bg-black/30 rounded-lg p-3 my-2 overflow-x-auto">
            <code className="text-sm font-mono text-green-400">{code}</code>
          </pre>
        )
      }
      return <span key={index}>{renderWithTables(part)}</span>
    })
  }

  const renderWithTables = (text: string) => {
    const lines = text.split("\n")
    const sections: { type: "text" | "table"; content: string[] }[] = []
    let currentSection: { type: "text" | "table"; content: string[] } = { type: "text", content: [] }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const isTableRow = line.trim().startsWith("|") && line.trim().endsWith("|")
      const isSeparator = /^\|[-:\s|]+\|$/.test(line.trim())

      if (isTableRow || isSeparator) {
        if (currentSection.type !== "table") {
          if (currentSection.content.length > 0) {
            sections.push(currentSection)
          }
          currentSection = { type: "table", content: [] }
        }
        currentSection.content.push(line)
      } else {
        if (currentSection.type !== "text") {
          if (currentSection.content.length > 0) {
            sections.push(currentSection)
          }
          currentSection = { type: "text", content: [] }
        }
        currentSection.content.push(line)
      }
    }
    if (currentSection.content.length > 0) {
      sections.push(currentSection)
    }

    return sections.map((section, sectionIndex) => {
      if (section.type === "table") {
        return renderTable(section.content, sectionIndex)
      }
      return <span key={sectionIndex}>{renderInline(section.content.join("\n"))}</span>
    })
  }

  const renderTable = (lines: string[], tableKey: number) => {
    const rows = lines.filter(line => !/^\|[-:\s|]+\|$/.test(line.trim()))
    
    if (rows.length === 0) return null

    const parseRow = (row: string) => {
      return row
        .split("|")
        .slice(1, -1)
        .map(cell => cell.trim())
    }

    const headerCells = parseRow(rows[0])
    const bodyRows = rows.slice(1).map(parseRow)

    return (
      <div key={tableKey} className="my-3 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-black/20">
              {headerCells.map((cell, i) => (
                <th key={i} className="px-3 py-2 text-left text-sm font-bold">
                  {renderTextFormatting(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyRows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-border/30 hover:bg-white/5">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-3 py-2 text-sm">
                    {renderTextFormatting(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderInline = (text: string) => {
    const lines = text.split("\n")
    
    return lines.map((line, lineIndex) => {
      if (line.startsWith("### ")) {
        return <h3 key={lineIndex} className="text-lg font-bold mt-3 mb-1">{renderTextFormatting(line.slice(4))}</h3>
      }
      if (line.startsWith("## ")) {
        return <h2 key={lineIndex} className="text-xl font-bold mt-4 mb-2">{renderTextFormatting(line.slice(3))}</h2>
      }
      if (line.startsWith("# ")) {
        return <h1 key={lineIndex} className="text-2xl font-bold mt-4 mb-2">{renderTextFormatting(line.slice(2))}</h1>
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <div key={lineIndex} className="flex gap-2 ml-2">
            <span>•</span>
            <span>{renderTextFormatting(line.slice(2))}</span>
          </div>
        )
      }
      const numberedMatch = line.match(/^(\d+)\.\s(.*)/)
      if (numberedMatch) {
        return (
          <div key={lineIndex} className="flex gap-2 ml-2">
            <span>{numberedMatch[1]}.</span>
            <span>{renderTextFormatting(numberedMatch[2])}</span>
          </div>
        )
      }
      if (line.trim() === "") {
        return <br key={lineIndex} />
      }
      return <p key={lineIndex} className="my-1">{renderTextFormatting(line)}</p>
    })
  }

  const renderTextFormatting = (text: string): React.ReactNode => {
    let result: React.ReactNode[] = []
    let key = 0

    // Process bold and inline code
    const regex = /(\*\*.*?\*\*|`[^`]+`)/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(<span key={key++}>{text.slice(lastIndex, match.index)}</span>)
      }
      
      const matched = match[0]
      if (matched.startsWith("**") && matched.endsWith("**")) {
        result.push(<strong key={key++} className="font-bold">{matched.slice(2, -2)}</strong>)
      } else if (matched.startsWith("`") && matched.endsWith("`")) {
        result.push(
          <code key={key++} className="bg-black/20 px-1.5 py-0.5 rounded text-sm font-mono text-primary">
            {matched.slice(1, -1)}
          </code>
        )
      }
      lastIndex = match.index + match[0].length
    }
    
    if (lastIndex < text.length) {
      result.push(<span key={key++}>{text.slice(lastIndex)}</span>)
    }

    return result.length > 0 ? result : text
  }

  return <div className="markdown-content">{renderMarkdown(content)}</div>
}

export function SlideChat({ isActive }: SlideProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [ipAddress, setIpAddress] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Fetch IP address on mount
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json")
        const data = await response.json()
        setIpAddress(data.ip)
      } catch (error) {
        console.error("Failed to fetch IP address:", error)
        setIpAddress("unknown")
      }
    }
    fetchIP()
  }, [])

  useEffect(() => {
    if (isActive && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 500)
    }
  }, [isActive])

  // Prevent scroll from bubbling to parent (slide navigation)
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation()
  }, [])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    const assistantMessageId = (Date.now() + 1).toString()
    
    // Add placeholder message IMMEDIATELY for real-time streaming display
    setMessages((prev) => [...prev, { id: assistantMessageId, role: "assistant", content: "" }])

    try {
      const response = await fetch(
        "https://n8n.biwai-business.tn/webhook/ba41926c-6c95-40ae-833e-09da6d6eee1b",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            message: userMessage.content,
            sessionId: ipAddress,
            ip: ipAddress
          }),
        }
      )

      if (!response.body) {
        throw new Error("No response body")
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let accumulatedContent = ""
      let buffer = ""

      // Helper to update message content in real-time
      const updateMessageContent = (content: string) => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content }
              : msg
          )
        )
        // Scroll to bottom on each update
        setTimeout(scrollToBottom, 10)
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        buffer += chunk

        // Try to parse complete JSON objects from buffer
        let startIndex = 0
        
        while (startIndex < buffer.length) {
          const objStart = buffer.indexOf("{", startIndex)
          if (objStart === -1) break

          // Find matching closing brace
          let depth = 0
          let objEnd = -1
          let inString = false
          let escape = false

          for (let i = objStart; i < buffer.length; i++) {
            const char = buffer[i]
            
            if (escape) {
              escape = false
              continue
            }
            
            if (char === "\\") {
              escape = true
              continue
            }
            
            if (char === '"') {
              inString = !inString
              continue
            }
            
            if (inString) continue
            
            if (char === "{") depth++
            if (char === "}") {
              depth--
              if (depth === 0) {
                objEnd = i
                break
              }
            }
          }

          if (objEnd === -1) break

          const jsonStr = buffer.slice(objStart, objEnd + 1)
          startIndex = objEnd + 1

          try {
            const obj = JSON.parse(jsonStr)
            
            let newContent = ""
            if (obj.type === "item" && obj.content) {
              newContent = obj.content
            } else if (obj.output) {
              newContent = obj.output
            } else if (obj.content && typeof obj.content === "string") {
              newContent = obj.content
            } else if (obj.text) {
              newContent = obj.text
            } else if (obj.message && typeof obj.message === "string") {
              newContent = obj.message
            }

            if (newContent) {
              accumulatedContent += newContent
              // Update immediately for real-time streaming effect
              updateMessageContent(accumulatedContent)
            }
          } catch {
            // Skip invalid JSON
          }
        }

        buffer = buffer.slice(startIndex)
      }

      // Handle remaining buffer
      if (!accumulatedContent && buffer.trim()) {
        try {
          const obj = JSON.parse(buffer)
          accumulatedContent = obj.output || obj.content || obj.text || obj.message || ""
        } catch {
          if (!buffer.trim().startsWith("{")) {
            accumulatedContent = buffer.trim()
          }
        }
        if (accumulatedContent) {
          updateMessageContent(accumulatedContent)
        }
      }

      // Final update if no content was received
      if (!accumulatedContent) {
        updateMessageContent("Désolé, je n'ai pas pu traiter votre demande.")
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => {
        const hasPlaceholder = prev.some(msg => msg.id === assistantMessageId)
        if (hasPlaceholder) {
          return prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: "Une erreur s'est produite. Veuillez réessayer." }
              : msg
          )
        }
        return [...prev, { id: assistantMessageId, role: "assistant", content: "Une erreur s'est produite. Veuillez réessayer." }]
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      e.stopPropagation()
      sendMessage()
    }
  }

  const messageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  }

  return (
    <SlideWrapper gradient="dark">
      <div className="h-full flex flex-col px-4 md:px-12 lg:px-24 py-6 md:py-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="flex flex-col h-full max-w-4xl mx-auto w-full"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-4 md:mb-6 shrink-0">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
              Assistant IA
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
              <GradientText>Discutez avec UnifAI</GradientText>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Posez vos questions sur notre plateforme
            </p>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 min-h-0 flex flex-col rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 overflow-hidden"
          >
            {/* Messages Area */}
            <div 
              ref={messagesContainerRef}
              onWheel={handleWheel}
              className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 overscroll-contain"
            >
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base max-w-xs">
                    Commencez la conversation en posant une question sur UnifAI Platform
                  </p>
                </motion.div>
              )}

              <AnimatePresence mode="popLayout">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === "user"
                          ? "bg-primary/20 border border-primary/30"
                          : "bg-accent/20 border border-accent/30"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      ) : (
                        <Bot className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                      )}
                    </div>

                    <div
                      className={`max-w-[75%] md:max-w-[70%] px-4 py-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-primary/20 border border-primary/30 rounded-tr-md"
                          : "bg-card/50 border border-border/50 rounded-tl-md"
                      }`}
                    >
                      <div className="text-sm md:text-base leading-relaxed">
                        {message.role === "assistant" ? (
                          message.content ? (
                            <MarkdownContent content={message.content} />
                          ) : (
                            <div className="flex items-center gap-2">
                              <Loader2 className="w-4 h-4 animate-spin text-accent" />
                              <span className="text-muted-foreground">En train de réfléchir...</span>
                            </div>
                          )
                        ) : (
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 border-t border-border/30 bg-card/20 shrink-0">
              <div className="flex items-center gap-2 md:gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Tapez votre message..."
                  disabled={isLoading}
                  className="flex-1 h-10 md:h-12 px-4 md:px-5 rounded-full bg-card/50 border border-border/50 text-sm md:text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-4 text-center shrink-0">
            <span className="text-xs font-mono text-primary/40 uppercase tracking-wider">15 / 15</span>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
