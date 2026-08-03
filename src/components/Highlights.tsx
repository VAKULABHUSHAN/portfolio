
const COUNTERS = [
  { num: '2+', label: 'Years Experience' },
  { num: '4+', label: 'Shipped Systems' },
  { num: '9.1', label: 'College GPA' },
  { num: '1st', label: 'Award Winner' },
]

const ITEMS = [
  'Launched Quickmetrics (First Mobile App) directly on the Google Play Store (Sept 2025)',
  'Won 1st Place in Project Presentation at the SRM College Science Forum (Oct 2024)',
  'Delivered industrial full-stack ERP systems and hybrid AI Local LLM (Ollama) integrations',
  'Served as Secondary Team Lead at Healthletic Lifestyle, managing Agile progress and team POA',
]

export const Highlights = () => {
  return (
    <section id="highlights" className="bg-[#05100B] relative overflow-hidden py-[140px] max-md:py-[80px]">
      {/* Background Section Title */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[15vw] text-white/[0.012] pointer-events-none select-none whitespace-nowrap z-0">
        HIGHLIGHTS
      </div>

      <div className="wrap max-w-[1400px] mx-auto px-20 max-md:px-8 relative z-10">
        <div className="grid grid-cols-12 gap-16 items-center max-lg:flex max-lg:flex-col max-lg:gap-16">

          {/* Intro & Counters Column */}
          <div className="col-span-5 highlights-intro">
            <div className="reveal-step">
              <div className="sec-label flex items-center gap-[14px] mb-6">
                <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
                <span className="sec-label-txt font-mono text-[14px] tracking-[.45em] uppercase text-[#10B981]">Highlights</span>
              </div>
            </div>
            <h2 className="reveal-step sec-title font-display font-black text-[clamp(40px,5vw,72px)] leading-[1.05] text-white mb-12" style={{ transitionDelay: '0.1s' }}>
              Numbers that <em className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#0A8B5D] italic not-italic">Matter.</em>
            </h2>

            <div className="highlights-counters grid grid-cols-2 gap-6">
              {COUNTERS.map((c, i) => (
                <div key={i}
                  className="reveal counter-card p-8 border border-white/5 bg-[#0A1C15]/40 backdrop-blur-sm group transition-all duration-500 hover:border-[#0D6E4F]/40 hover:bg-[#0D6E4F]/5"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="cc-num font-display font-black text-[48px] leading-none text-white mb-3 group-hover:text-[#10B981] transition-colors duration-300">
                    {c.num}
                  </div>
                  <div className="cc-lbl font-mono text-[14px] tracking-[.35em] uppercase text-[#9A8880] group-hover:text-[#10B981]/80 transition-colors">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Points Column */}
          <div className="col-span-7 highlights-list flex flex-col gap-6">
            {ITEMS.map((item, i) => (
              <div key={i}
                className="reveal highlight-item flex flex-col items-start gap-6 p-8 border border-white/5 bg-[#071711]/60 backdrop-blur-md transition-all duration-500 hover:translate-x-0 sm:hover:translate-x-3 hover:border-[#0D6E4F]/40 hover:bg-[#0A1C15] group"
                style={{ transitionDelay: `${(i + 4) * 0.1}s` }}
              >
                <div className="hi-icon w-12 h-12 flex-shrink-0 border border-[#0D6E4F]/40 flex items-center justify-center rounded-lg text-[#10B981] group-hover:bg-[#10B981]/10 group-hover:scale-110 shadow-[0_0_15px_rgba(13,110,79,0.1)] transition-all duration-500">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="hi-txt text-[16px] sm:text-[18px] text-white/80 leading-relaxed font-normal group-hover:text-white transition-colors duration-300 break-words">
                  {item}
                </p>
                {/* Accent line on right */}
                <div className="hidden md:block ml-auto w-[1px] h-6 bg-gradient-to-b from-transparent via-[#10B981]/30 to-transparent group-hover:h-12 transition-all duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}