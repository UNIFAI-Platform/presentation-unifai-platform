"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useMemo } from "react"
import {
  OpenAIIcon, AnthropicIcon, GoogleGeminiIcon, MetaIcon, MistralIcon, HuggingFaceIcon, CohereIcon,
  N8nIcon, MakeIcon, ZapierIcon, PowerAutomateIcon,
  ShopifyIcon, WooCommerceIcon, MagentoIcon, PrestaShopIcon, BigCommerceIcon, OdooIcon, NetSuiteIcon, SAPIcon,
  WhatsAppIcon, TelegramIcon, TwilioIcon, SlackIcon, DiscordIcon, GmailIcon, TeamsIcon,
  NotionIcon, TrelloIcon, AsanaIcon, GitHubIcon, GitLabIcon,
  PowerBIIcon, TableauIcon, GoogleAnalyticsIcon, LookerIcon, MetabaseIcon,
  AWSIcon, AzureIcon, GCPIcon, VercelIcon, DigitalOceanIcon, CloudflareIcon, DockerIcon, SupabaseIcon, PostgreSQLIcon, RedisIcon,
  Dynamics365Icon, SalesforceIcon, HubSpotIcon, OracleIcon,
  LinkedInIcon, TwitterIcon, CustomerLogo
} from "@/components/icons"

// Define icon configurations for each slide
const slideIcons: Record<number, Array<{
  Icon: React.ComponentType<{ className?: string }>
  position: string
  size: string
  opacity: string
  animation: {
    y?: number[]
    rotate?: number[]
    scale?: number[]
  }
  duration: number
  delay: number
}>> = {
  1: [ // Cover - AI Platform
    { Icon: OpenAIIcon, position: "top-[20%] right-[15%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/20", animation: { y: [0, -15, 0], rotate: [0, 5, 0] }, duration: 6, delay: 0 },
    { Icon: AnthropicIcon, position: "top-[25%] right-[10%]", size: "w-12 h-12 md:w-16 md:h-16", opacity: "text-primary/20", animation: { y: [0, 20, 0], rotate: [0, -5, 0] }, duration: 7, delay: 1 },
    { Icon: GoogleGeminiIcon, position: "bottom-[35%] left-[10%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/20", animation: { y: [0, -20, 0], rotate: [0, 10, 0] }, duration: 8, delay: 2 },
    { Icon: MetaIcon, position: "top-[40%] right-[8%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 15, 0], rotate: [0, -8, 0] }, duration: 9, delay: 0.5 },
    { Icon: MistralIcon, position: "top-[30%] left-[8%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, -6, 0] }, duration: 7, delay: 1.5 },
    { Icon: HuggingFaceIcon, position: "bottom-[20%] right-[20%]", size: "w-9 h-9 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 10, 0], rotate: [0, 5, 0] }, duration: 8, delay: 2.5 },
  ],
  2: [ // Context - Retail Challenges
    { Icon: ShopifyIcon, position: "top-[15%] right-[12%]", size: "w-12 h-12 md:w-16 md:h-16", opacity: "text-primary/15", animation: { y: [0, -15, 0], rotate: [0, 5, 0] }, duration: 7, delay: 0 },
    { Icon: WooCommerceIcon, position: "top-[35%] left-[8%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 20, 0], rotate: [0, -8, 0] }, duration: 8, delay: 1 },
    { Icon: MagentoIcon, position: "bottom-[25%] right-[6%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -18, 0], rotate: [0, 6, 0] }, duration: 9, delay: 2 },
    { Icon: BigCommerceIcon, position: "bottom-[40%] left-[5%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -4, 0] }, duration: 6, delay: 0.5 },
    { Icon: PrestaShopIcon, position: "bottom-[15%] right-[15%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -5, 0] }, duration: 8.5, delay: 2.2 },
  ],
  3: [ // Mission - Automation Goals
    { Icon: N8nIcon, position: "top-[18%] right-[10%]", size: "w-14 h-14 md:w-20 md:h-20", opacity: "text-primary/20", animation: { y: [0, -12, 0], rotate: [0, 8, 0] }, duration: 6, delay: 0 },
    { Icon: MakeIcon, position: "bottom-[30%] left-[6%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -6, 0] }, duration: 8, delay: 1.5 },
    { Icon: ZapierIcon, position: "top-[40%] left-[4%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -15, 0], rotate: [0, 5, 0] }, duration: 7, delay: 0.8 },
    { Icon: PowerAutomateIcon, position: "bottom-[20%] right-[8%]", size: "w-9 h-9 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -10, 0] }, duration: 9, delay: 2 },
    { Icon: GitHubIcon, position: "top-[25%] left-[12%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 6, 0] }, duration: 7.5, delay: 1.2 },
    { Icon: DockerIcon, position: "bottom-[35%] right-[15%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -4, 0] }, duration: 8, delay: 2.5 },
  ],
  4: [ // Intelligence - AI Processing
    { Icon: OpenAIIcon, position: "top-[20%] right-[8%]", size: "w-16 h-16 md:w-20 md:h-20", opacity: "text-primary/20", animation: { y: [0, -20, 0], rotate: [0, 10, 0] }, duration: 8, delay: 0 },
    { Icon: AnthropicIcon, position: "bottom-[35%] left-[5%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 15, 0], rotate: [0, -8, 0] }, duration: 7, delay: 1 },
    { Icon: HuggingFaceIcon, position: "top-[45%] left-[7%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 6, 0] }, duration: 6, delay: 2 },
    { Icon: CohereIcon, position: "bottom-[20%] right-[10%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -5, 0] }, duration: 9, delay: 0.5 },
    { Icon: GoogleGeminiIcon, position: "top-[15%] left-[15%]", size: "w-9 h-9 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 8, 0] }, duration: 7.5, delay: 1.5 },
    { Icon: MistralIcon, position: "bottom-[15%] right-[20%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 10, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.2 },
  ],
  5: [ // Platform - Tech Stack
    { Icon: N8nIcon, position: "top-[15%] right-[6%]", size: "w-12 h-12 md:w-16 md:h-16", opacity: "text-primary/20", animation: { y: [0, -14, 0], rotate: [0, 6, 0] }, duration: 7, delay: 0 },
    { Icon: SupabaseIcon, position: "bottom-[30%] left-[4%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 16, 0], rotate: [0, -7, 0] }, duration: 8, delay: 1.2 },
    { Icon: PostgreSQLIcon, position: "top-[40%] left-[6%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -18, 0], rotate: [0, 8, 0] }, duration: 9, delay: 0.6 },
    { Icon: RedisIcon, position: "bottom-[22%] right-[8%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -5, 0] }, duration: 6, delay: 2 },
    { Icon: DockerIcon, position: "top-[25%] left-[10%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 4, 0] }, duration: 7.5, delay: 1.8 },
    { Icon: VercelIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8, delay: 2.5 },
  ],
  6: [ // Agents - Messaging
    { Icon: WhatsAppIcon, position: "top-[12%] right-[8%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -16, 0], rotate: [0, 8, 0] }, duration: 7, delay: 0 },
    { Icon: TelegramIcon, position: "bottom-[28%] left-[5%]", size: "w-10 h-10 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8, delay: 1 },
    { Icon: TwilioIcon, position: "top-[35%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 5, 0] }, duration: 6, delay: 1.5 },
    { Icon: SlackIcon, position: "bottom-[15%] right-[6%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -10, 0] }, duration: 9, delay: 0.5 },
    { Icon: DiscordIcon, position: "top-[20%] left-[15%]", size: "w-9 h-9 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 6, 0] }, duration: 7.5, delay: 2 },
    { Icon: GmailIcon, position: "bottom-[35%] right-[15%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -4, 0] }, duration: 8.5, delay: 2.2 },
  ],
  7: [ // Collaborative - Team Tools
    { Icon: SlackIcon, position: "top-[18%] right-[10%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -14, 0], rotate: [0, 6, 0] }, duration: 7, delay: 0 },
    { Icon: TeamsIcon, position: "bottom-[32%] left-[6%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 16, 0], rotate: [0, -8, 0] }, duration: 8, delay: 1.2 },
    { Icon: NotionIcon, position: "top-[38%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 4, 0] }, duration: 6, delay: 0.8 },
    { Icon: TrelloIcon, position: "bottom-[20%] right-[8%]", size: "w-8 h-8 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -5, 0] }, duration: 9, delay: 2 },
    { Icon: AsanaIcon, position: "top-[25%] left-[8%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -18, 0], rotate: [0, 7, 0] }, duration: 7.5, delay: 1.5 },
    { Icon: GitHubIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.5 },
  ],
  8: [ // Scenario - Workflow
    { Icon: N8nIcon, position: "top-[15%] right-[6%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -15, 0], rotate: [0, 8, 0] }, duration: 8, delay: 0 },
    { Icon: MakeIcon, position: "bottom-[25%] left-[5%]", size: "w-10 h-10 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -6, 0] }, duration: 7, delay: 1 },
    { Icon: ZapierIcon, position: "top-[40%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 5, 0] }, duration: 6, delay: 1.8 },
    { Icon: GitHubIcon, position: "bottom-[18%] right-[10%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -10, 0] }, duration: 9, delay: 0.5 },
    { Icon: GitLabIcon, position: "top-[20%] left-[15%]", size: "w-9 h-9 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 6, 0] }, duration: 7.5, delay: 2 },
    { Icon: SlackIcon, position: "bottom-[35%] right-[15%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -4, 0] }, duration: 8.5, delay: 2.2 },
  ],
  9: [ // Automation - n8n + AI
    { Icon: N8nIcon, position: "top-[18%] right-[8%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -16, 0], rotate: [0, 360] }, duration: 7, delay: 0 },
    { Icon: OpenAIIcon, position: "bottom-[30%] left-[5%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -360] }, duration: 8, delay: 1 },
    { Icon: WhatsAppIcon, position: "top-[35%] left-[6%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 6, 0] }, duration: 6, delay: 0.8 },
    { Icon: TelegramIcon, position: "bottom-[20%] right-[6%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -8, 0] }, duration: 9, delay: 1.5 },
    { Icon: TwilioIcon, position: "top-[22%] left-[10%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 5, 0] }, duration: 7.5, delay: 2 },
    { Icon: GmailIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.5 },
  ],
  10: [ // Benefits - Analytics
    { Icon: PowerBIIcon, position: "top-[12%] right-[10%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -18, 0], rotate: [0, 8, 0] }, duration: 7, delay: 0 },
    { Icon: TableauIcon, position: "bottom-[25%] left-[5%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 15, 0], rotate: [0, -6, 0] }, duration: 8, delay: 1 },
    { Icon: GoogleAnalyticsIcon, position: "top-[38%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 10, 0] }, duration: 6, delay: 0.5 },
    { Icon: LookerIcon, position: "bottom-[18%] right-[8%]", size: "w-10 h-10 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -5, 0] }, duration: 9, delay: 1.8 },
    { Icon: MetabaseIcon, position: "top-[22%] left-[8%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 4, 0] }, duration: 7.5, delay: 2.2 },
    { Icon: SAPIcon, position: "bottom-[35%] right-[15%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -4, 0] }, duration: 8.5, delay: 2.5 },
  ],
  11: [ // Why UnifAI - Cloud/Tech
    { Icon: AWSIcon, position: "top-[15%] right-[8%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -16, 0], rotate: [0, 10, 0] }, duration: 7, delay: 0 },
    { Icon: AzureIcon, position: "bottom-[28%] left-[5%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -8, 0] }, duration: 8, delay: 1.2 },
    { Icon: GCPIcon, position: "top-[40%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 6, 0] }, duration: 6, delay: 0.6 },
    { Icon: VercelIcon, position: "bottom-[18%] right-[10%]", size: "w-10 h-10 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -5, 0] }, duration: 9, delay: 1.8 },
    { Icon: DigitalOceanIcon, position: "top-[25%] left-[10%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 8, 0] }, duration: 7.5, delay: 2 },
    { Icon: CloudflareIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.5 },
  ],
  12: [ // Conclusion - Mix
    { Icon: OpenAIIcon, position: "top-[12%] right-[8%]", size: "w-16 h-16 md:w-20 md:h-20", opacity: "text-primary/20", animation: { y: [0, -18, 0], rotate: [0, 10, 0] }, duration: 8, delay: 0 },
    { Icon: N8nIcon, position: "bottom-[30%] left-[5%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 16, 0], rotate: [0, -6, 0] }, duration: 7, delay: 1 },
    { Icon: WhatsAppIcon, position: "top-[35%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 8, 0] }, duration: 6, delay: 0.5 },
    { Icon: PowerBIIcon, position: "bottom-[20%] right-[10%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -5, 0] }, duration: 9, delay: 1.5 },
    { Icon: SlackIcon, position: "top-[22%] left-[8%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -10, 0], rotate: [0, 6, 0] }, duration: 7.5, delay: 2 },
    { Icon: ShopifyIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.5 },
  ],
  13: [ // Client - Enterprise
    { Icon: Dynamics365Icon, position: "top-[15%] right-[10%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -16, 0], rotate: [0, 8, 0] }, duration: 7, delay: 0 },
    { Icon: SalesforceIcon, position: "bottom-[28%] left-[6%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -6, 0] }, duration: 8, delay: 1 },
    { Icon: HubSpotIcon, position: "top-[38%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 10, 0] }, duration: 6, delay: 0.6 },
    { Icon: SAPIcon, position: "bottom-[20%] right-[8%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 15, 0], rotate: [0, -8, 0] }, duration: 9, delay: 1.5 },
    { Icon: OracleIcon, position: "top-[25%] left-[10%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -12, 0], scale: [1, 1.1, 1] }, duration: 7.5, delay: 2 },
  ],
  14: [ // Thank - Contact
    { Icon: LinkedInIcon, position: "top-[20%] right-[15%]", size: "w-12 h-12 md:w-16 md:h-16", opacity: "text-primary/20", animation: { y: [0, -15, 0], scale: [1, 1.1, 1] }, duration: 6, delay: 0 },
    { Icon: TwitterIcon, position: "bottom-[30%] left-[10%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, 10, 0] }, duration: 7, delay: 1 },
    { Icon: GitHubIcon, position: "top-[35%] left-[8%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, -8, 0] }, duration: 8, delay: 0.5 },
    { Icon: GmailIcon, position: "bottom-[25%] right-[12%]", size: "w-10 h-10 md:w-12 md:h-12", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, 6, 0] }, duration: 9, delay: 1.5 },
    { Icon: SlackIcon, position: "top-[25%] left-[15%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, -10, 0], scale: [1, 1.05, 1] }, duration: 7.5, delay: 2 },
    { Icon: NotionIcon, position: "bottom-[35%] right-[8%]", size: "w-6 h-6 md:w-8 md:h-8", opacity: "text-primary/15", animation: { y: [0, 16, 0], rotate: [0, -5, 0] }, duration: 6.5, delay: 0.8 },
  ],
  15: [ // Chat - AI Assistant
    { Icon: OpenAIIcon, position: "top-[15%] right-[10%]", size: "w-14 h-14 md:w-18 md:h-18", opacity: "text-primary/20", animation: { y: [0, -16, 0], rotate: [0, 10, 0] }, duration: 7, delay: 0 },
    { Icon: AnthropicIcon, position: "bottom-[30%] left-[6%]", size: "w-10 h-10 md:w-14 md:h-14", opacity: "text-primary/15", animation: { y: [0, 18, 0], rotate: [0, -8, 0] }, duration: 8, delay: 1 },
    { Icon: GoogleGeminiIcon, position: "top-[38%] left-[4%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -14, 0], rotate: [0, 6, 0] }, duration: 6, delay: 0.5 },
    { Icon: N8nIcon, position: "bottom-[20%] right-[8%]", size: "w-12 h-12 md:w-16 md:h-16", opacity: "text-primary/15", animation: { y: [0, 14, 0], rotate: [0, -5, 0] }, duration: 9, delay: 1.5 },
    { Icon: HuggingFaceIcon, position: "top-[22%] left-[12%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, -12, 0], rotate: [0, 8, 0] }, duration: 7.5, delay: 2 },
    { Icon: MistralIcon, position: "bottom-[15%] right-[18%]", size: "w-8 h-8 md:w-10 md:h-10", opacity: "text-primary/15", animation: { y: [0, 12, 0], rotate: [0, -6, 0] }, duration: 8.5, delay: 2.2 },
  ],
}

interface FloatingIconsProps {
  currentSlide: number
}

export function FloatingIcons({ currentSlide }: FloatingIconsProps) {
  const icons = useMemo(() => slideIcons[currentSlide] || slideIcons[1], [currentSlide])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
      <AnimatePresence mode="wait">
        {icons.map((iconConfig, index) => {
          const { Icon, position, size, opacity, animation, duration, delay } = iconConfig
          
          return (
            <motion.div
              key={`${currentSlide}-${index}`}
              className={`absolute ${position} ${opacity}`}
              initial={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: -180,
                filter: "blur(10px)"
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
                ...animation
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.3,
                rotate: 180,
                filter: "blur(10px)"
              }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                scale: { duration: 0.6, delay: index * 0.1, ease: "backOut" },
                rotate: { duration: 0.6, delay: index * 0.1 },
                filter: { duration: 0.4, delay: index * 0.1 },
                y: { duration, repeat: Infinity, ease: "easeInOut", delay },
                ...(animation.rotate && animation.rotate[1] > 180 
                  ? { rotate: { duration: duration * 2, repeat: Infinity, ease: "linear" } }
                  : {}
                ),
                ...(animation.scale 
                  ? { scale: { duration, repeat: Infinity, ease: "easeInOut", delay } }
                  : {}
                ),
              }}
            >
              <Icon className={size} />
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}
