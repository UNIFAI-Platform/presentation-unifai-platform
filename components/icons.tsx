import type { SVGProps } from "react"
import {
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiMeta,
  SiHuggingface,
  SiN8N,
  SiZapier,
  SiShopify,
  SiWoocommerce,
  SiMagento,
  SiPrestashop,
  SiBigcommerce,
  SiOdoo,
  SiSap,
  SiWhatsapp,
  SiTelegram,
  SiTwilio,
  SiSlack,
  SiDiscord,
  SiGmail,
  SiNotion,
  SiTrello,
  SiAsana,
  SiGithub,
  SiGitlab,
  SiTableau,
  SiGoogleanalytics,
  SiLooker,
  SiMetabase,
  SiAmazonwebservices,
  SiGooglecloud,
  SiVercel,
  SiDigitalocean,
  SiCloudflare,
  SiDocker,
  SiSupabase,
  SiPostgresql,
  SiRedis,
  SiSalesforce,
  SiHubspot,
  SiOracle,
  SiLinkedin,
  SiX,
} from "react-icons/si"

// Type for icon wrapper props - compatible with both SVG props and react-icons
type IconProps = SVGProps<SVGSVGElement> & { className?: string; size?: number | string }

// --- AI Models ---

export function OpenAIIcon(props: IconProps) {
  return <SiOpenai {...props} />
}

export function AnthropicIcon(props: IconProps) {
  return <SiAnthropic {...props} />
}

export function GoogleGeminiIcon(props: IconProps) {
  return <SiGooglegemini {...props} />
}

export function MetaIcon(props: IconProps) {
  return <SiMeta {...props} />
}

export function MistralIcon(props: IconProps) {
  // Mistral AI - custom SVG (M logo pattern)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h4v4H3V3zm7 0h4v4h-4V3zm7 0h4v4h-4V3zM3 10h4v4H3v-4zm14 0h4v4h-4v-4zM3 17h4v4H3v-4zm7 0h4v4h-4v-4zm7 0h4v4h-4v-4zm-7-7h4v4h-4v-4z" />
    </svg>
  )
}

export function HuggingFaceIcon(props: IconProps) {
  return <SiHuggingface {...props} />
}

export function CohereIcon(props: IconProps) {
  // Cohere - custom SVG as it's not in Simple Icons
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.067 13.236c0-2.755 1.723-5.078 4.26-6.02-.31-.09-.633-.14-.967-.14-2.755 0-4.988 2.234-4.988 4.988 0 2.755 2.233 4.989 4.988 4.989.334 0 .657-.05.967-.14-2.537-.942-4.26-3.266-4.26-6.02v-.657zm8.01-7.333c-3.616 0-6.545 2.93-6.545 6.545 0 3.616 2.929 6.545 6.545 6.545 3.615 0 6.544-2.929 6.544-6.545 0-3.615-2.929-6.545-6.544-6.545zm4.543 10.066c-.755.755-1.679 1.27-2.68 1.508-1.173.277-2.415.17-3.525-.3a6.37 6.37 0 0 1-2.012-1.208 6.37 6.37 0 0 1-1.208-2.012c-.47-1.11-.577-2.352-.3-3.525.238-1.001.753-1.925 1.508-2.68.755-.755 1.679-1.27 2.68-1.508 1.173-.277 2.415-.17 3.525.3a6.37 6.37 0 0 1 2.012 1.208 6.37 6.37 0 0 1 1.208 2.012c.47 1.11.577 2.352.3 3.525-.238 1.001-.753 1.925-1.508 2.68z" />
    </svg>
  )
}

// --- Automation ---

export function N8nIcon(props: IconProps) {
  return <SiN8N {...props} />
}

export function MakeIcon(props: IconProps) {
  // Make (Integromat) - custom SVG with concentric circles logo
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    </svg>
  )
}

export function ZapierIcon(props: IconProps) {
  return <SiZapier {...props} />
}

export function PowerAutomateIcon(props: IconProps) {
  // Microsoft Power Automate - custom SVG
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.406 4.047l7.14 4.168v7.784L4.406 11.83V4.047zM12.453 4l7.14 4.168v7.785l-7.14-4.169V4z" />
      <path d="M4.406 11.953l7.14 4.168v7.785l-7.14-4.168v-7.785z" opacity="0.6" />
    </svg>
  )
}

// --- Retail / E-commerce ---

export function ShopifyIcon(props: IconProps) {
  return <SiShopify {...props} />
}

export function WooCommerceIcon(props: IconProps) {
  return <SiWoocommerce {...props} />
}

export function MagentoIcon(props: IconProps) {
  return <SiMagento {...props} />
}

export function PrestaShopIcon(props: IconProps) {
  return <SiPrestashop {...props} />
}

export function BigCommerceIcon(props: IconProps) {
  return <SiBigcommerce {...props} />
}

export function OdooIcon(props: IconProps) {
  return <SiOdoo {...props} />
}

export function NetSuiteIcon(props: IconProps) {
  // Oracle NetSuite - custom SVG (not in Simple Icons)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.4 3.2L12 11.2 5.6 8 12 4.8zM4 16.2V9.6l7 3.5v6.6l-7-3.5zm16 0l-7 3.5v-6.6l7-3.5v6.6z" />
    </svg>
  )
}

export function SAPIcon(props: IconProps) {
  return <SiSap {...props} />
}

// --- Messaging ---

export function WhatsAppIcon(props: IconProps) {
  return <SiWhatsapp {...props} />
}

export function TelegramIcon(props: IconProps) {
  return <SiTelegram {...props} />
}

export function TwilioIcon(props: IconProps) {
  return <SiTwilio {...props} />
}

export function SlackIcon(props: IconProps) {
  return <SiSlack {...props} />
}

export function DiscordIcon(props: IconProps) {
  return <SiDiscord {...props} />
}

export function GmailIcon(props: IconProps) {
  return <SiGmail {...props} />
}

export function TeamsIcon(props: IconProps) {
  // Microsoft Teams - custom SVG
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.625 8.25h-3.75v-1.5A2.25 2.25 0 0 0 14.625 4.5h-1.5a2.25 2.25 0 0 0-2.25 2.25v1.5h-3.75a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5zM12.375 6.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5h-3v-1.5zm-1.5 9h-3v-1.5h3v1.5zm4.5 0h-3v-1.5h3v1.5zm3 0h-1.5v-1.5h1.5v1.5z" />
      <circle cx="17.25" cy="4.5" r="2.25" />
    </svg>
  )
}

// --- Collaboration ---

export function NotionIcon(props: IconProps) {
  return <SiNotion {...props} />
}

export function TrelloIcon(props: IconProps) {
  return <SiTrello {...props} />
}

export function AsanaIcon(props: IconProps) {
  return <SiAsana {...props} />
}

export function GitHubIcon(props: IconProps) {
  return <SiGithub {...props} />
}

export function GitLabIcon(props: IconProps) {
  return <SiGitlab {...props} />
}

// --- Analytics ---

export function PowerBIIcon(props: IconProps) {
  // Microsoft Power BI - custom SVG (bar chart icon)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M10 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3zm7 4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function TableauIcon(props: IconProps) {
  return <SiTableau {...props} />
}

export function GoogleAnalyticsIcon(props: IconProps) {
  return <SiGoogleanalytics {...props} />
}

export function LookerIcon(props: IconProps) {
  return <SiLooker {...props} />
}

export function MetabaseIcon(props: IconProps) {
  return <SiMetabase {...props} />
}

// --- Cloud / Infra ---

export function AWSIcon(props: IconProps) {
  return <SiAmazonwebservices {...props} />
}

export function AzureIcon(props: IconProps) {
  // Microsoft Azure - custom SVG (simplified Azure logo)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.483 21h13.034l-5.197-6.154 5.697-11.071L5.483 21zM12.727 3l-4.92 7.26L3 17.522 8.17 8.8 12.727 3z" />
    </svg>
  )
}

export function GCPIcon(props: IconProps) {
  return <SiGooglecloud {...props} />
}

export function VercelIcon(props: IconProps) {
  return <SiVercel {...props} />
}

export function DigitalOceanIcon(props: IconProps) {
  return <SiDigitalocean {...props} />
}

export function CloudflareIcon(props: IconProps) {
  return <SiCloudflare {...props} />
}

export function DockerIcon(props: IconProps) {
  return <SiDocker {...props} />
}

export function SupabaseIcon(props: IconProps) {
  return <SiSupabase {...props} />
}

export function PostgreSQLIcon(props: IconProps) {
  return <SiPostgresql {...props} />
}

export function RedisIcon(props: IconProps) {
  return <SiRedis {...props} />
}

// --- CRM / ERP ---

export function Dynamics365Icon(props: IconProps) {
  // Microsoft Dynamics 365 - custom SVG (simplified logo)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 3.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" />
    </svg>
  )
}

export function SalesforceIcon(props: IconProps) {
  return <SiSalesforce {...props} />
}

export function HubSpotIcon(props: IconProps) {
  return <SiHubspot {...props} />
}

export function OracleIcon(props: IconProps) {
  return <SiOracle {...props} />
}

// --- Social ---

export function LinkedInIcon(props: IconProps) {
  return <SiLinkedin {...props} />
}

export function TwitterIcon(props: IconProps) {
  return <SiX {...props} />
}

// --- Generic Icons ---

export function AIBotIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </svg>
  )
}

export function AutomationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

// --- Customer Logo ---

export function CustomerLogo(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/E.Leclerc_logo.svg/1024px-E.Leclerc_logo.svg.png" 
      alt="E.Leclerc"
      {...props}
    />
  )
}

