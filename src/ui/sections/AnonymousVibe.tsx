
import { motion } from "framer-motion";


export default function AnonymousVibe() {
  const cards = [
    { t: 'No faces. Just signal.' },
    { t: 'Underground. On purpose.' },
    { t: 'Builders over talkers.' },
    { t: 'Results or silence.' },
  ]
  return (
    <section className="relative py-28 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h3 className="text-2xl md:text-4xl font-semibold">The Vibe</h3>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="glass p-8 h-56 md:h-64 relative overflow-hidden shadow-[0_10px_50px_-15px_rgba(0,0,0,0.6)] flex items-center justify-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/6 to-transparent" />
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--color-accent)]/10 blur-3xl pointer-events-none" />
              <div className="relative text-xl md:text-2xl font-medium">{c.t}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


