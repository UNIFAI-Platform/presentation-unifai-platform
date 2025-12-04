"use client"

import { useEffect } from "react"

// URL du webhook n8n
const N8N_WEBHOOK_URL = "https://n8n.biwai-business.tn/webhook/39854f88-ca17-4ee0-a603-f7d5d8f52271"

interface VisitorData {
  ip: string | null
  device: string
  os: string
  browser: string
  language: string
  screenResolution: string
  timezone: string
  referrer: string
  currentUrl: string
  createdAt: string
  userAgent: string
}

// Détecter le type d'appareil
function getDevice(userAgent: string): string {
  if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    if (/iPad/i.test(userAgent)) return "Tablet (iPad)"
    if (/Android/i.test(userAgent) && !/Mobile/i.test(userAgent)) return "Tablet (Android)"
    return "Mobile"
  }
  return "Desktop"
}

// Détecter l'OS
function getOS(userAgent: string): string {
  if (/Windows NT 10/i.test(userAgent)) return "Windows 10/11"
  if (/Windows NT 6.3/i.test(userAgent)) return "Windows 8.1"
  if (/Windows NT 6.2/i.test(userAgent)) return "Windows 8"
  if (/Windows NT 6.1/i.test(userAgent)) return "Windows 7"
  if (/Windows/i.test(userAgent)) return "Windows"
  if (/Mac OS X/i.test(userAgent)) {
    const match = userAgent.match(/Mac OS X (\d+[._]\d+)/)
    return match ? `macOS ${match[1].replace('_', '.')}` : "macOS"
  }
  if (/Linux/i.test(userAgent)) return "Linux"
  if (/Android/i.test(userAgent)) {
    const match = userAgent.match(/Android (\d+\.?\d*)/)
    return match ? `Android ${match[1]}` : "Android"
  }
  if (/iOS|iPhone|iPad|iPod/i.test(userAgent)) {
    const match = userAgent.match(/OS (\d+[._]\d+)/)
    return match ? `iOS ${match[1].replace('_', '.')}` : "iOS"
  }
  return "Unknown OS"
}

// Détecter le navigateur
function getBrowser(userAgent: string): string {
  if (/Edg\//i.test(userAgent)) {
    const match = userAgent.match(/Edg\/(\d+)/)
    return match ? `Microsoft Edge ${match[1]}` : "Microsoft Edge"
  }
  if (/Chrome/i.test(userAgent) && !/Chromium|Edg/i.test(userAgent)) {
    const match = userAgent.match(/Chrome\/(\d+)/)
    return match ? `Google Chrome ${match[1]}` : "Google Chrome"
  }
  if (/Firefox/i.test(userAgent)) {
    const match = userAgent.match(/Firefox\/(\d+)/)
    return match ? `Mozilla Firefox ${match[1]}` : "Mozilla Firefox"
  }
  if (/Safari/i.test(userAgent) && !/Chrome|Chromium/i.test(userAgent)) {
    const match = userAgent.match(/Version\/(\d+)/)
    return match ? `Safari ${match[1]}` : "Safari"
  }
  if (/Opera|OPR/i.test(userAgent)) return "Opera"
  return "Unknown Browser"
}

// Récupérer l'IP publique via une API externe
async function getPublicIP(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return data.ip
  } catch {
    try {
      // Fallback API
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      return data.ip
    } catch {
      return null
    }
  }
}

export function VisitorTracker() {
  useEffect(() => {
    const trackVisitor = async () => {
      const userAgent = navigator.userAgent
      const ip = await getPublicIP()
      
      const visitorData: VisitorData = {
        ip: ip,
        device: getDevice(userAgent),
        os: getOS(userAgent),
        browser: getBrowser(userAgent),
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || "Direct",
        currentUrl: window.location.href,
        createdAt: new Date().toISOString(),
        userAgent: userAgent
      }

      // Envoyer les données au webhook n8n
      try {
        await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitorData),
        })
      } catch {
        // Silently fail
      }
    }

    trackVisitor()
  }, [])

  // Ce composant ne rend rien visuellement
  return null
}
