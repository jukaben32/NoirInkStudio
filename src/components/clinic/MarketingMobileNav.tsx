'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#features', label: 'Platform' },
  { href: '#workflow', label: 'How it works' },
  { href: '#portal', label: 'Portal' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export function MarketingMobileNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // The header uses backdrop-blur, which (like `transform`) creates a new
  // containing block for `position: fixed` descendants in Chromium/Safari -
  // without a portal, this panel gets clipped to the header's own ~76px
  // box instead of covering the viewport. Portalling to `document.body`
  // sidesteps that entirely.
  const menu = open ? (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-[var(--page-bg)] p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-soft)] text-[var(--text-strong)]"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[14px] px-3 py-3 text-base font-semibold text-[var(--text-strong)] transition hover:bg-[var(--brand-soft)] hover:text-[var(--brand-strong)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login"
            className="mt-3 rounded-[14px] border border-[var(--border-soft)] px-3 py-3 text-center text-base font-semibold text-[var(--text-strong)] transition hover:bg-[var(--brand-soft)] hover:text-[var(--brand-strong)]"
          >
            Sign in
          </a>
        </nav>
      </div>
    </div>
  ) : null

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-soft)] bg-white/70 text-[var(--text-strong)]"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="h-5 w-5" />
      </button>

      {mounted && menu ? createPortal(menu, document.body) : null}
    </div>
  )
}
