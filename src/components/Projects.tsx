import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const PROJECTS = [
  {
    title: 'Personalens [AR & AI]',
    category: 'AI / Healthcare Concept',
    year: '2026',
    index: '01',
    description:
      'An innovative concept application designed for individuals with memory-related conditions such as dementia. Assists users in recognizing familiar faces and recalling past interactions to restore daily independence, while enabling caregivers to track interactions with contextual support.',
    techs: ['Flutter', 'AI APIs', 'Ollama LLM', 'Dart', 'Node.js'],
    image: '/ar_project.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/VAKULABHUSHAN',
  },
  {
    title: 'IFA Enterprise ERP System',
    category: 'Full-Stack / Industrial',
    year: '2026',
    index: '02',
    description:
      'A comprehensive full-stack inventory and warehouse management system developed for an MSME company in Coimbatore. Features real-time tracking for products, stock movement, automated order workflows, and operational analytics.',
    techs: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1800',
    liveUrl: '#',
    githubUrl: 'https://github.com/VAKULABHUSHAN',
  },
  {
    title: 'Healthletic Fitness Mobile App',
    category: 'Cross-Platform Mobile',
    year: '2025',
    index: '03',
    description:
      'A comprehensive fitness platform enabling seamless tracking for daily steps, workouts, meal planning, calorie goals, water intake, and medication reminders. Includes interactive friend challenges, leaderboards, and real-time synchronization via RESTful APIs.',
    techs: ['Flutter', 'Dart', 'REST APIs', 'State Management', 'Figma'],
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1800',
    liveUrl: '#',
    githubUrl: 'https://github.com/VAKULABHUSHAN',
  },
  {
    title: 'Card Vault — Digital Business Cards',
    category: 'Mobile / AI Powered',
    year: '2025',
    index: '04',
    description:
      'A cross-platform smart business card management application integrating AI-powered Optical Character Recognition (OCR) for instantaneous contact scanning, cloud image archiving, and organized contact storage powered by Supabase.',
    techs: ['Flutter', 'AI OCR', 'Supabase', 'Dart', 'GetX'],
    image: '/card_vault.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/VAKULABHUSHAN',
  },
]

export const Projects = () => {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(0)
  const sectionRef = useRef<HTMLElement | null>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  // Single reliable trigger for the whole section
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.15 })

  const goTo = useCallback((next: number) => {
    setDir(next > current ? 1 : -1)
    setCurrent(next)
  }, [current])

  const goNext = () => goTo((current + 1) % PROJECTS.length)
  const goPrev = () => goTo((current - 1 + PROJECTS.length) % PROJECTS.length)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current

    // If horizontal movement exceeds vertical movement and threshold, trigger carousel navigation
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        goPrev()
      } else {
        goNext()
      }
    }
  }

  const project = PROJECTS[current]

  return (
    <section
      id="projects"
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`relative bg-[#040C09] overflow-hidden min-h-[100svh] flex flex-col reveal-trigger ${sectionInView ? 'visible' : ''}`}
    >
      {/* Background Images - Staggered entrance tied to section visibility */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={true} custom={dir}>
          {sectionInView && (
            <motion.div
              key={current}
              custom={dir}
              initial={{ opacity: 0, scale: 1.2, filter: 'blur(15px) brightness(0.3)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px) brightness(0.4)' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020806] via-[#020806]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#020806]/95 via-[#020806]/50 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Surface Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] z-[1]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col justify-between min-h-[100svh] h-auto px-6 sm:px-12 md:px-20 pt-20 sm:pt-16 pb-16 gap-10">

        {/* Top bar */}
        <div className="pj-entrance-top flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-7 sm:w-10 h-[1px] bg-[#10B981]" />
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.35em] uppercase text-[#10B981]">Selected Work</span>
          </div>
          <div className="font-mono text-[13px] sm:text-[14px] text-white/50 tracking-[0.2em]">
            <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span> / {String(PROJECTS.length).padStart(2, '0')}
          </div>
        </div>

        {/* Info Blocks */}
        <div className="max-w-4xl my-auto">
          <div className="overflow-hidden mb-3 sm:mb-4 pj-entrance-cat">
            <motion.p
              key={`cat-${current}`}
              initial={sectionInView ? { y: "100%", opacity: 0 } : false}
              animate={sectionInView ? { y: 0, opacity: 1 } : false}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-mono text-[12px] sm:text-[14px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#10B981]"
            >
              {project.category} — {project.year}
            </motion.p>
          </div>

          <div className="overflow-hidden mb-6 sm:mb-8 pj-entrance-title">
            <motion.h2
              key={`title-${current}`}
              initial={sectionInView ? { y: "110%", skewY: 5 } : false}
              animate={sectionInView ? { y: 0, skewY: 0 } : false}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-display font-black text-white text-[clamp(34px,8vw,110px)] leading-[1.1] tracking-tight pb-6 -mb-6"
            >
              {project.title}
            </motion.h2>
          </div>

          <div className="max-w-xl pj-entrance-content">
            <motion.p
              key={`desc-${current}`}
              initial={sectionInView ? { opacity: 0, x: -30 } : false}
              animate={sectionInView ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="text-[15px] sm:text-[17.5px] text-white/80 leading-[1.75] sm:leading-[1.85] mb-8 sm:mb-10"
            >
              {project.description}
            </motion.p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-12">
              {project.techs.map((tech) => (
                <span key={tech} className="font-mono text-[10.5px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3.5 sm:px-4 py-1.5 sm:py-2 border border-[#10B981]/30 bg-[#10B981]/5 text-[#F8F4F0]/90 rounded-sm">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-12">
            </div>
          </div>
        </div>

        {/* Navigation Rail */}
        <div className="pj-entrance-bottom flex items-end justify-between pt-4">
          <div className="flex gap-3 sm:gap-4">
            <button onClick={goPrev} aria-label="Previous Project" className="w-12 h-12 sm:w-14 sm:h-14 border border-white/10 flex items-center justify-center hover:bg-[#10B981]/10 hover:border-[#10B981]/40 transition-all duration-400 group rounded-md bg-white/[0.02]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 group-hover:text-[#10B981] transition-colors">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={goNext} aria-label="Next Project" className="w-12 h-12 sm:w-14 sm:h-14 border border-white/10 flex items-center justify-center hover:bg-[#10B981]/10 hover:border-[#10B981]/40 transition-all duration-400 group rounded-md bg-white/[0.02]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 group-hover:text-[#10B981] transition-colors">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div className="flex gap-6 items-center max-md:hidden">
            {PROJECTS.map((p, i) => (
              <button key={i} onClick={() => goTo(i)} className="relative group h-[56px] w-[100px] overflow-hidden rounded">
                <div className={`w-full h-full border ${i === current ? 'border-[#10B981]' : 'border-white/10 opacity-30'} transition-all duration-500`}>
                  <img src={p.image} className="w-full h-full object-cover grayscale-[30%] brightness-[100%] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" alt="" />
                </div>
                {i === current && <motion.div layoutId="active-pill" className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#10B981]" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Index Number */}
      <div className="pj-entrance-num absolute top-1/2 right-6 sm:right-12 md:right-24 -translate-y-1/2 pointer-events-none select-none z-[-1]">
        <span className="font-display font-black text-[#10B981]/5 text-[clamp(130px,25vw,400px)] leading-[0.7] tracking-tighter">
          {project.index}
        </span>
      </div>

      <style>{`
        /* ── Luxury Sync Entrance ── */
        .pj-entrance-top, .pj-entrance-cat, .pj-entrance-title, .pj-entrance-content, .pj-entrance-bottom, .pj-entrance-num {
          opacity: 0;
          filter: blur(10px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
        }

        .pj-entrance-top, .pj-entrance-cat, .pj-entrance-title, .pj-entrance-content, .pj-entrance-bottom {
          transform: translateY(40px);
        }

        .pj-entrance-num {
          transform: translateY(-50%) translateX(60px);
        }

        .reveal-trigger.visible .pj-entrance-top { opacity: 1; transform: translateY(0); filter: blur(0); transition-delay: 0.1s; }
        .reveal-trigger.visible .pj-entrance-cat { opacity: 1; transform: translateY(0); filter: blur(0); transition-delay: 0.2s; }
        .reveal-trigger.visible .pj-entrance-title { opacity: 1; transform: translateY(0); filter: blur(0); transition-delay: 0.3s; }
        .reveal-trigger.visible .pj-entrance-content { opacity: 1; transform: translateY(0); filter: blur(0); transition-delay: 0.5s; }
        .reveal-trigger.visible .pj-entrance-bottom { opacity: 1; transform: translateY(0); filter: blur(0); transition-delay: 0.7s; }
        .reveal-trigger.visible .pj-entrance-num { opacity: 1; transform: translateY(-50%) translateX(0); filter: blur(0); transition-delay: 0.3s; }
      `}</style>
    </section>
  )
}
