import { BrandMark, SectionEyebrow, SurfaceCard, ButtonLink } from '@/components/clinic/shared'
import { VoiceWidget } from '@/components/voice/VoiceWidget'

export default function WidgetDemoPage() {
  const demoBusinessSlug = process.env.NEXT_PUBLIC_DEMO_BUSINESS_ID

  return (
    <div className="min-h-screen bg-[var(--page-bg)]">
      <header className="border-b border-[var(--border-soft)] bg-[rgba(255,253,248,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="/">
            <BrandMark compact />
          </a>
          <ButtonLink href="/signup" icon="calendar">
            Start Free Trial
          </ButtonLink>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-8">
        <SectionEyebrow>Live widget</SectionEyebrow>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[var(--text-strong)] sm:text-5xl">
          Talk to Clara
        </h1>
        <p className="mt-3 max-w-xl text-[var(--text-muted)]">
          This is the same AI voice/chat assistant your clients would use to book a session on your
          studio website. Click the widget in the corner to try it live.
        </p>

        <SurfaceCard className="mt-10 p-6 lg:p-8">
          {demoBusinessSlug ? (
            <div className="text-sm text-[var(--text-muted)]">
              Click the assistant bubble in the bottom-right corner to start a live conversation.
            </div>
          ) : (
            <div className="text-sm leading-7 text-[var(--text-muted)]">
              No demo studio is configured yet — set{' '}
              <code className="rounded bg-[var(--panel-soft)] px-1.5 py-0.5 text-[13px]">NEXT_PUBLIC_DEMO_BUSINESS_ID</code>{' '}
              to a real business slug to enable this live demo. In the meantime, create a free
              account to configure your own AI agent and try it from your dashboard.
            </div>
          )}
        </SurfaceCard>
      </main>

      {demoBusinessSlug ? (
        <VoiceWidget
          businessSlug={demoBusinessSlug}
          position="bottom-right"
          theme="light"
          primaryColor="#b08d57"
          secondaryColor="#8a6b3e"
        />
      ) : null}
    </div>
  )
}
