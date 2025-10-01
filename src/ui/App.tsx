
import React, { Suspense } from "react";
const Hero = React.lazy(() => import('./sections/Hero'))
const Story = React.lazy(() => import('./sections/Story'))
const Exclusivity = React.lazy(() => import('./sections/Exclusivity'))
const AnonymousVibe = React.lazy(() => import('./sections/AnonymousVibe'))
const Application = React.lazy(() => import('./sections/Application'))

export function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 text-balance">
      <Suspense fallback={<div className="p-10 text-center opacity-60">Loading…</div>}>
        <Hero />
        <Story />
        <Exclusivity />
        <AnonymousVibe />
        <Application />
        <footer className="py-16 text-center text-xs opacity-60">© {new Date().getFullYear()} Thinkers Club</footer>
      </Suspense>
    </div>
  )
}


