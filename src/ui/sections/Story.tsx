import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Story() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  const items = [
    { k: 'why', title: 'Why this exists', body: 'Signal is rare. We compress chaos into momentum.' },
    { k: 'what', title: 'What you’ll get', body: 'Tight rooms. Brutal feedback. Unfair leverage.' },
    { k: 'few', title: 'Why only a few', body: 'Most won’t do the work. We filter for people who do.' },
    { k: 'next', title: 'What’s next', body: 'You step through the gate. Or you don’t.' },
  ]

  return (
    <section ref={ref} className="relative py-28 md:py-44">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.h2 style={{ y }} className="text-2xl md:text-4xl font-semibold tracking-tight">
          The Arc
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.k}
              className="glass p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{item.title}</div>
              <div className="mt-2 text-xl md:text-2xl">{item.body}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


