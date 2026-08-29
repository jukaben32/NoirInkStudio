import '@/styles/globals.css'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    default: 'Noir Ink Studio',
    template: '%s | Noir Ink Studio',
  },
  description: 'AI studio receptionist and booking platform for premium tattoo studios.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--page-bg)] text-[var(--text-strong)] antialiased">
        {children}
      </body>
    </html>
  )
}
