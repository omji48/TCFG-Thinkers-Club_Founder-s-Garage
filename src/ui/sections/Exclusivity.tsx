
export default function Exclusivity() {
  const tiles = [
    { locked: false },
    { locked: false },
    { locked: true },
    { locked: true },
  ]
  return (
    <section className="relative py-28 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3
              className="text-2xl md:text-4xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Only 30% make it past the gates.
            </motion.h3>
            <motion.p
              className="mt-4 text-neutral-600 dark:text-neutral-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We don’t optimize for headcount. We optimize for impact. If you’re in, you’ll know.
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#apply" className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--color-accent)] text-neutral-900 font-medium glow-accent">Apply Now</a>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tiles.map((t, i) => (
              <div key={i} className="relative group glass h-48 md:h-60 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.05),transparent_60%)]" />
                <div className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_8px)]" />
                {t.locked ? (
                  <div className="absolute inset-0 backdrop-blur-sm" />
                ) : null}
                <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-xs text-neutral-400">
                  <span className="tracking-widest uppercase">{t.locked ? 'Members‑Only' : 'Preview'}</span>
                  <span className="inline-flex items-center gap-1">
                    {t.locked ? '🔒' : '✦'}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


