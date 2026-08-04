import { useEffect, useRef, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ParticleCanvas } from '../3d/ParticleCanvas'

export const Hero = ({ appReady }: { appReady: boolean }) => {
  const heroRef = useRef<HTMLElement>(null)
  const photoRef = useRef<HTMLImageElement>(null)
  const tickerRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!appReady || !heroRef.current) return

    const heroBg = heroRef.current.querySelector<HTMLElement>('.hero-bg-text-anim')
    const heroName = heroRef.current.querySelector<HTMLElement>('.hero-name-anim')
    const heroImage = heroRef.current.querySelector<HTMLElement>('.hero-image-anim')
    const heroLeft = heroRef.current.querySelector<HTMLElement>('.hero-left-anim')
    const heroTicker = heroRef.current.querySelector<HTMLElement>('.hero-ticker-anim')
    const skillItems = skillsRef.current?.querySelectorAll<HTMLElement>('.skill-item')

    gsap.set([heroBg, heroName, heroImage, heroLeft, heroTicker], {
      opacity: 0,
      y: 20,
      scale: 0.98,
    })

    if (skillItems && skillItems.length) {
      gsap.set(skillItems, { clipPath: 'inset(0 100% 0 0)', opacity: 0, x: 24 })
    }

    const tl = gsap.timeline()
      .to(heroBg, {
        opacity: 0.1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      }, 0)
      .to(heroName, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: 'power4.out',
      }, 0.2)
      .to(heroImage, {
        opacity: 0.72,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
      }, 0.35)
      .to(heroLeft, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power4.out',
      }, 0.55)
      .to(skillItems, {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: 'power4.out',
        stagger: 0.1,
      }, 0.72)
      .to(heroTicker, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power4.out',
      }, 1.05)

    return () => {
      tl.kill()
    }
  }, [appReady])

  useEffect(() => {
    if (!tickerRef.current) return

    const tl = gsap.to(tickerRef.current, {
      xPercent: -50,
      duration: 50,
      ease: 'none',
      repeat: -1,
      force3D: true,
    })

    return () => {
      tl.kill()
    }
  }, [])

  // Skills stagger animation
  useEffect(() => {
    if (!appReady || !skillsRef.current) return
    const items = skillsRef.current.querySelectorAll<HTMLElement>('.skill-item')
    gsap.set(items, { clipPath: 'inset(0 100% 0 0)', opacity: 0, x: 24 })
    const tl = gsap.timeline({ delay: 0.1 })
      .to(items, {
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        x: 0,
        duration: 0.1,
        ease: 'power4.out',
        stagger: 0.1,
      })

    return () => {
      tl.kill()
    }
  }, [appReady])

  useEffect(() => {
    const onScroll = () => {
      if (photoRef.current) {
        // Subtle parallax for the image
        photoRef.current.style.transform = `translateY(${window.scrollY * 0.1}px) scale(${1 + window.scrollY * 0.0005})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section ref={heroRef} id="hero" className="relative min-h-[100svh] w-full overflow-x-hidden flex flex-col justify-between bg-[#020605]">
      {/* Background layer */}
      <ParticleCanvas />

      {/* Dark gradient overlay + Vignette */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(2,6,5,0.85)_60%,rgba(2,6,5,1)_100%)] pointer-events-none"></div>

      {/* Grain Texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

      {/* Background large text (Faint behind everything) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-full text-center pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div role="presentation" className="hero-bg-text-anim hero-reveal font-display font-black text-[clamp(130px,28vw,500px)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(13,110,79,0.15)] opacity-10 tracking-[-0.05em] whitespace-nowrap" style={{ '--delay': '0.1s' } as CSSProperties}>
          VAKULABHUSHAN
        </div>
      </div>

      {/* Top Main Heading Content */}
      <div className="relative z-[10] hidden w-full pt-[13vh] pb-4 lg:flex justify-center pointer-events-none">
        <div className="hero-name-anim hero-reveal relative" style={{ '--delay': '0.5s' } as CSSProperties}>
          {/* Subtle green glow behind text (Reduced Intensity) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#0B7552] opacity-[0.1] blur-[80px] rounded-full pointer-events-none"></div>

          <h1 className="font-display font-black text-[clamp(48px,10vw,140px)] leading-[0.85] tracking-[-0.01em] uppercase text-center flex flex-wrap justify-center gap-3 md:gap-5 m-0 relative z-10 scale-y-110">
            {/* Subtle vertical gradient and depth */}
            <span className="bg-gradient-to-b from-[#10B981] to-[#0D6E4F] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(13,110,79,0.2)] opacity-85">VAKULABHUSHAN</span>
            <span className="bg-gradient-to-b from-[#10B981] to-[#0D6E4F] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(13,110,79,0.2)] opacity-85">NJ</span>
            <span className="sr-only"> — Premier Flutter Developer &amp; Mobile App Engineer in Chennai and Coimbatore, India</span>
          </h1>
        </div>
      </div>

      {/* Grid container for Left, Center Image, Right Content */}
      <div className="relative z-[11] flex-1 w-full max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 items-center lg:items-end pb-3 lg:pb-0 px-4 lg:px-12 mt-auto gap-y-0 lg:gap-y-0 pt-[8.5vh] lg:pt-0">

        {/* Left Side: Description & CTA - Centered Vertically */}
        <div className="hero-left-anim hero-reveal flex flex-col gap-2.5 lg:gap-8 max-lg:order-2 max-lg:items-center max-lg:text-center max-lg:-mt-7 z-20 self-center lg:-mt-[5vh]" style={{ '--delay': '0.9s' } as CSSProperties}>
          <p className="text-[13px] sm:text-[15px] lg:text-[clamp(16px,1.2vw,18px)] leading-relaxed text-[#F8F4F0] max-w-[360px] lg:max-w-[380px] drop-shadow-sm">
            Crafting scalable web and cross-platform mobile apps as a dedicated <strong className="font-semibold text-[#10B981]">Flutter Developer in Chennai and Coimbatore</strong>. Bridging clean UI/UX with high-performance engineering architectures and AI applications.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
            <a href="#projects" aria-label="View Vakulabhushan NJ's selected Flutter and cross-platform mobile apps" className="inline-flex items-center justify-center rounded-full bg-[#10B981] text-[#020605] px-6 sm:px-8 py-3 text-xs font-mono tracking-[0.2em] font-bold uppercase transition-all duration-300 hover:bg-[#0D6E4F] hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              View Work
            </a>
            <a href="#contact" aria-label="Contact Vakulabhushan NJ for Flutter app development in Chennai and Coimbatore" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white px-6 sm:px-8 py-3 text-xs font-mono tracking-[0.2em] font-semibold uppercase transition-all duration-300 hover:bg-white hover:text-[#020605]">
              Contact Me
            </a>
          </div>
        </div>

        {/* Center Side: Image */}
        <div className="relative w-full h-[clamp(300px,48svh,390px)] sm:h-[48vh] lg:h-[70vh] lg:max-h-none flex justify-center items-end max-lg:order-1 z-10 pointer-events-none">
          <div role="presentation" aria-hidden="true" className="absolute top-[-10px] left-1/2 z-[8] -translate-x-1/2 font-display font-black text-[clamp(64px,24vw,110px)] leading-none tracking-[-0.03em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#10B981] to-[#0D6E4F] opacity-85 whitespace-nowrap lg:hidden select-none">
            VAKUL
          </div>

          {/* Arch styled image container */}
          <div className="absolute bottom-[-18px] lg:bottom-[5px] z-[10] w-[64%] max-w-[320px] lg:w-[min(100%,480px)] lg:max-w-none h-[94%] lg:h-[110%] rounded-t-[500px] overflow-hidden bg-[#020605]">
            <img
              ref={photoRef}
              src="/photo.png"
              width={480}
              height={600}
              fetchPriority="high"
              decoding="async"
              alt="Vakulabhushan NJ — Premier Flutter Developer & Mobile App Engineer in Chennai and Coimbatore"
              className="hero-image-anim hero-reveal w-full h-full object-cover object-top opacity-100 contrast-[1.05]"
              style={{ '--delay': '0.3s' } as CSSProperties}
            />
            {/* Bottom fade inside the arch to seamlessly blend with the background */}
            <div className="absolute inset-x-0 bottom-0 h-[24%] lg:h-[40%] bg-gradient-to-t from-[#020605] via-[#020605]/80 to-transparent z-[12]"></div>

            {/* Soft inner glow and 1px top rim light for brushed metal effect */}
            <div className="absolute inset-0 rounded-t-[500px] !shadow-none lg:shadow-[inset_0_0_80px_rgba(13,117,83,0.25),inset_0_1.5px_0_rgba(16,185,129,0.3)] z-[13] pointer-events-none"></div>

            {/* Subtle noise texture over the arch */}
            <div className="absolute inset-0 z-[14] mix-blend-overlay opacity-20 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
          </div>
        </div>

        {/* Right Side: Skills/Services List - Centered Vertically */}
        <div
          ref={skillsRef}
          className="flex flex-col lg:text-right max-lg:order-3 max-lg:items-center max-lg:-mt-1 z-20 self-center lg:-mt-[5vh] lg:min-w-[220px]"
        >
          {/* Label */}
          <p className="font-mono text-[10px] lg:text-[12px] tracking-[.32em] lg:tracking-[.35em] uppercase text-[#10B981]/80 font-semibold mb-2 lg:mb-5 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">
            Expertise
          </p>

          {[
            { name: 'Flutter & Mobile App Dev', active: true },
            { name: 'Full-Stack Web Systems', active: false },
            { name: 'AI & Local LLM Integration', active: false },
            { name: 'ERP & Scalable Architectures', active: false },
          ].map((skill) => (
            <div
              key={skill.name}
              className="skill-item group relative flex items-center gap-2 lg:gap-3 lg:justify-end max-lg:justify-center py-1.5 lg:py-3 overflow-hidden"
            >
              {/* Hover scan-line */}
              <span className="absolute inset-0 bg-gradient-to-l from-[#10B981]/5 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out pointer-events-none" />

              {/* Active dot (desktop — sits to the left of text, which is on right) */}
              {skill.active && (
                <span className="max-lg:hidden w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] flex-shrink-0" />
              )}

              <span
                className={`relative z-10 font-display tracking-wide text-[clamp(13px,1.1vw,16px)] transition-colors duration-300 ${skill.active
                  ? 'text-white font-semibold'
                  : 'text-[#F8F4F0]/80 group-hover:text-white'
                  } max-lg:text-[12px]`}
              >
                {skill.name}
              </span>

              {/* Active dot (mobile — sits to right of text) */}
              {skill.active && (
                <span className="lg:hidden w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ticker bar - Cinematic Premium Version */}
      <div className="hero-ticker-anim hero-reveal relative z-[10] w-full border-t border-[#0D6E4F]/30 py-6 bg-black/40 backdrop-blur-md overflow-hidden hidden lg:flex items-center" style={{ '--delay': '1.4s' } as CSSProperties}>
        {/* Cinematic edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-[11] pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-[11] pointer-events-none"></div>

        {/* Subtle top highlight for the bar */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent z-[12]"></div>

        <div
          ref={tickerRef}
          className="flex w-max"
          style={{
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="flex shrink-0 items-center gap-[8vw] px-[4vw]" style={{ transform: 'translate3d(0,0,0)' }}>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#0A8B5D] group-hover:text-[#10B981] group-hover:drop-shadow-[0_0_8px_#10B981] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 5.63v12.74L12 22l10-3.63V5.63L12 2zm0 3.16l7.84 2.85v10.15L12 19.84l-7.84-3.68V8.01L12 5.16zm0 2.2l-4.5 10.1h2.2l.9-2.3h4.8l.9 2.3h2.2l-4.5-10.1zm0 2.2l1.6 4.1h-3.2l1.6-4.1z" />
                </svg>
                Angular
              </div>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#10B981]/60 group-hover:text-[#10B981] group-hover:drop-shadow-[0_0_8px_#10B981] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684 0.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-7.37-12.928z" />
                </svg>
                Flutter
              </div>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#10B981]/60 group-hover:text-white group-hover:drop-shadow-[0_0_8px_white] transition-all duration-500" viewBox="0 0 24 24">
                  <mask id={`ts-mask-${group}`}>
                    <rect width="24" height="24" fill="white" />
                    <text x="12" y="17" fontFamily="Arial, Helvetica, sans-serif" fontSize="11" fontWeight="bold" fill="black" textAnchor="middle" style={{ letterSpacing: '-0.5px' }}>TS</text>
                  </mask>
                  <rect width="24" height="24" fill="currentColor" mask={`url(#ts-mask-${group})`} />
                </svg>
                TypeScript
              </div>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#0A8B5D]/60 group-hover:text-[#10B981] group-hover:drop-shadow-[0_0_8px_#10B981] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5V14h-2v2.5A6.5 6.5 0 015.5 10H8v-2H5.5A6.5 6.5 0 0112 1.5V4h2V1.5A6.5 6.5 0 0118.5 8H16v2h2.5a6.5 6.5 0 01-6.5 6.5z" />
                </svg>
                Ollama AI
              </div>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#0A8B5D]/60 group-hover:text-[#10B981] group-hover:drop-shadow-[0_0_8px_#10B981] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4.5 6.33v8.66L12 19.33l7.5-4.34V6.33L12 2zm5.5 12.07l-5.5 3.18-5.5-3.18V7.59l5.5-3.18 5.5 3.18v6.66z" />
                  <path d="M12 6.5l-4 2.3v4.4l4 2.3 4-2.3v-4.4l-4-2.3zm2.5 6.07l-2.5 1.44-2.5-1.44V9.09l2.5-1.44 2.5 1.44v3.48z" />
                </svg>
                Node.js
              </div>
              <div className="group flex items-center gap-4 text-[#F8F4F0]/60 font-mono text-[13px] tracking-widest hover:text-white transition-all duration-500 cursor-default uppercase">
                <svg className="w-5 h-5 text-[#10B981]/60 group-hover:text-white group-hover:drop-shadow-[0_0_8px_white] transition-all duration-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.193 9.555c-1.31-6.79-5.17-8.125-5.385-8.204a.82.82 0 0 0-.582 0c-.215.079-4.075 1.414-5.385 8.204-.325 1.684-.09 3.518.665 5.176 1.135 2.492 3.11 4.542 4.493 6.002a.855.855 0 0 0 1.236 0c1.383-1.46 3.358-3.51 4.493-6.002.755-1.658.99-3.492.665-5.176z" />
                </svg>
                MongoDB
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 lg:bottom-12 left-1/2 -translate-x-1/2 z-[20] hidden lg:flex flex-col items-center gap-3 pointer-events-none opacity-80">
        <div className="w-[1px] h-12 bg-[#0B7552]/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#10B981] to-transparent animate-[scroll-down_2s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down { 0% { transform: translateY(-100%); } 100% { transform: translateY(200%); } }
        @keyframes bgTextReveal { from { opacity: 0; transform: scale(0.95) translate(-50%, -50%); filter: blur(10px); } to { opacity: 0.1; transform: scale(1) translate(-50%, -50%); filter: blur(0); } }
        @keyframes imageReveal { from { opacity: 0; transform: translateY(40px) scale(0.95); filter: grayscale(100%) brightness(0.5); } to { opacity: 0.7; transform: translateY(0) scale(1); filter: grayscale(20%) brightness(1); } }
        @keyframes nameScaleUp { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }

        /* Trigger animations based on .visible class */
        .hero-bg-text-anim.visible { animation: bgTextReveal 2s cubic-bezier(0.16,1,0.3,1) var(--delay, 0s) both; }
        .hero-image-anim.visible { animation: imageReveal 1.8s cubic-bezier(0.16,1,0.3,1) var(--delay, 0s) both; }
        .hero-name-anim.visible { animation: nameScaleUp 1.2s cubic-bezier(0.16,1,0.3,1) var(--delay, 0s) both; }
        
        .hero-left-anim.visible,
        .hero-ticker-anim.visible {
          animation: slideUpCenterReveal 0.8s cubic-bezier(0.16,1,0.3,1) var(--delay, 0s) both;
        }

        /* Reset state */
        .hero-reveal:not(.visible) {
          opacity: 0;
          animation: none !important;
        }

        @keyframes slideUpCenterReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
