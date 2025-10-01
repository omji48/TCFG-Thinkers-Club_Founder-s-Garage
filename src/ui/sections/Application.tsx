
export default function Application() {
  const formUrl = 'https://forms.gle/LDKAjJJJmRaMrWLv6'
  return (
    <section id="apply" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
        <motion.h3
          className="text-2xl md:text-4xl font-semibold"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Think you’re ready?
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Only those who prove they’re not average are allowed in.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-accent)] text-neutral-900 font-medium glow-accent"
          >
            Begin Application
          </a>
        </motion.div>
      </div>
    </section>
  )
}


