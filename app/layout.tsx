import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Breach Detector — Scan GitHub for Leaked API Keys',
  description: 'Monitor GitHub commits for your API keys and get instant alerts when keys are exposed publicly. Built for DevOps teams and security engineers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="046a2045-c028-4d7d-bc60-4018bc40cb3c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
