import { useEffect, useRef } from 'react'

export const About = () => {
  const photoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = `scale(1.04) translateY(${window.scrollY * .04}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="about" className="bg-[#081711] relative overflow-hidden py-[120px] max-md:py-[80px]">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0D6E4F] to-transparent"></div>

      <div className="wrap max-w-[1280px] mx-auto px-16 max-md:px-6">
        <div className="about-grid grid grid-cols-[1fr_1.4fr] gap-20 items-center max-md:grid-cols-1 max-md:gap-12">

          <div className="reveal-l">
            <div className="about-photo-card relative border border-[#0D6E4F]/25 overflow-hidden bg-[#0A1C15] group">
              <div className="corner-tl absolute top-[-1px] left-[-1px] w-6 h-6 border-t-2 border-l-2 border-[#10B981] z-[2]"></div>
              <div className="corner-br absolute bottom-[-1px] right-[-1px] w-6 h-6 border-b-2 border-r-2 border-[#10B981] z-[2]"></div>

              <img
                ref={photoRef}
                src="/photo.png"
                loading="lazy"
                decoding="async"
                alt="Vakulabhushan NJ - Premier Flutter Developer and Mobile App Engineer in Chennai and Coimbatore"
                className="w-full aspect-[4/5] object-cover object-top contrast-[1.1] transition-all duration-800 group-hover:scale-[1.04] group-hover:contrast-[1.15]"
              />

              <div className="about-photo-badge absolute bottom-6 left-6 bg-[#030907]/85 border border-[#0D6E4F]/25 p-[14px_20px] backdrop-blur-[8px]">
                <div className="badge-role font-mono text-[14px] tracking-[.3em] uppercase text-[#10B981]">Full-Stack & Mobile Dev</div>
                <div className="badge-name font-display text-[24px] font-bold text-white mt-1">Vakulabhushan</div>
              </div>

              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D6E4F] via-[#10B981] to-[#0D6E4F] z-[1]"></div>
            </div>
          </div>

          <div className="about-text reveal-r flex flex-col gap-6">
            <div>
              <div className="reveal-step flex items-center gap-[14px] mb-4">
                <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
                <span className="sec-label-txt font-mono text-[14px] tracking-[.45em] uppercase text-[#10B981]">About Me</span>
              </div>
              <h2 className="sec-title font-display font-black text-[clamp(40px,5vw,72px)] leading-[1.05] text-white flex flex-wrap gap-x-4">
                {'Building the Future, One Commit at a Time.'.split(' ').map((word, i) => (
                  <span key={i} className="reveal-word inline-block" style={{ transitionDelay: `${i * 0.05}s` }}>
                    {word === 'Future,' ? <em className="text-[#10B981] italic not-italic">{word}</em> : word}
                  </span>
                ))}
              </h2>
            </div>

            <p className="reveal about-p text-base leading-[1.9] text-[#F8F4F0]/80 font-normal" style={{ transitionDelay: '0.2s' }}>
              I am <strong className="text-[#D4C5BA] font-medium">Vakulabhushan NJ</strong>, a premier <strong className="text-[#D4C5BA] font-medium">Flutter Developer in Chennai and Coimbatore</strong> passionate about scalable mobile and web development. Currently pursuing my <strong className="text-[#D4C5BA] font-medium">B.Tech in Computer Science and Engineering</strong> at <strong className="text-[#D4C5BA] font-medium">SRM Institute of Science and Technology</strong> in Chennai, India (9.1 GPA), I bring strong expertise in software architecture and cross-platform applications.
            </p>

            <p className="reveal about-p text-base leading-[1.9] text-[#F8F4F0]/80 font-normal" style={{ transitionDelay: '0.3s' }}>
              My core engineering strengths center on multi-platform mobile app development using <span className="text-[#10B981]">Flutter and Angular</span>, enhanced by real-time cloud integrations with <strong className="text-[#D4C5BA] font-medium">Supabase, Firebase, and MongoDB</strong> backed by high-throughput <strong className="text-[#D4C5BA] font-medium">Node.js and Express</strong> REST APIs. I craft clean UI/UX designs matched with reliable backend performance.
            </p>

            <p className="reveal about-p text-base leading-[1.9] text-[#F8F4F0]/80 font-normal" style={{ transitionDelay: '0.3s' }}>
              From deploying enterprise industrial <strong className="text-[#D4C5BA] font-medium">ERP systems</strong> across industries in Coimbatore to integrating cutting-edge <span className="text-[#10B981]">hybrid AI applications (Ollama Local LLM &amp; OCR)</span>, I thrive on building state-of-the-art cross-platform solutions that drive real business growth.
            </p>

            <div className="about-stats-row flex gap-8 py-6 my-2 border-y border-[#0D6E4F]/25">
              {[
                { num: '2+', lbl: 'Years Exp.', delay: '0.5s' },
                { num: '4+', lbl: 'ERP & AI Apps', delay: '0.55s' },
                { num: '9.1', lbl: 'College GPA', delay: '0.6s' }
              ].map((s, idx) => (
                <div key={idx} className="reveal asr-item" style={{ transitionDelay: s.delay }}>
                  <div className="asr-num font-display font-black text-[42px] leading-none text-white">{s.num.slice(0, -1)}<em className="text-[#10B981] not-italic">{s.num.slice(-1)}.</em></div>
                  <div className="asr-lbl font-mono text-[14px] tracking-[.3em] uppercase text-[#9A8880] mt-[5px]">{s.lbl}</div>
                </div>
              ))}
            </div>

            <div className="reveal-step status-pill inline-flex items-center gap-2 px-[18px] py-2 border border-[#0D6E4F]/40 bg-[#0D6E4F]/12 self-start" style={{ transitionDelay: '0.7s' }}>
              <span className="s-dot w-[7px] h-[7px] rounded-full bg-[#4ade80] shadow-[0_0_0_0_rgba(74,222,128,0.4)] animate-[pulse-dot_2s_ease-in-out_infinite]"></span>
              <span className="font-mono text-[14px] tracking-[.25em] uppercase text-[#10B981]">Open to Full-Stack & Mobile Dev Opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot { 0%,100%{ box-shadow:0 0 0 0 rgba(74,222,128,.4); } 50%{ box-shadow:0 0 0 6px rgba(74,222,128,0); } }
      `}</style>
    </section>
  )
}
