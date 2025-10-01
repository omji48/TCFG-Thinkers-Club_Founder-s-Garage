import { useRef, useEffect } from "react";
import { motion } from "framer-motion";


import * as THREE from 'three'

function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const requestRef = useRef<number | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    rendererRef.current = renderer
    container.appendChild(renderer.domElement)

    // Particles
    const geometry = new THREE.BufferGeometry()
    const particleCount = 1200
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const material = new THREE.PointsMaterial({ color: 0x00e5ff, size: 0.02, transparent: true, opacity: 0.8 })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let t = 0
    const animate = () => {
      t += 0.004
      points.rotation.y = t * 0.5
      points.rotation.x = Math.sin(t * 0.5) * 0.2
      renderer.render(scene, camera)
      requestRef.current = requestAnimationFrame(animate)
    }
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', onResize)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement) renderer.domElement.parentElement.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10 mask-fade-b" />
}

export default function Hero() {
  return (
    <section className="relative h-[90svh] md:h-[100svh] overflow-hidden">
      <BackgroundScene />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-950/40 pointer-events-none dark:to-neutral-950/60" />
      <div className="relative flex h-full items-center justify-center">
        <div className="px-6 md:px-10 max-w-5xl text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Not for Everyone. Built for the Chosen.
          </motion.h1>
          <motion.p
            className="mt-5 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          >
            A private collective for the relentless. If you have to ask, it’s not for you.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[var(--color-accent)] text-neutral-900 font-medium glow-accent"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


