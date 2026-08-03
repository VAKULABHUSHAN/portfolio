const ITEMS = [
  {
    title: 'Acceedo IoT Solutions',
    role: 'Software Developer (Internship)',
    date: 'Jun 2026 – Jul 2026',
    detail: 'Implemented an advanced hybrid AI architecture utilizing Local LLMs (Ollama) on client software, significantly optimizing response times by intelligently routing complex inquiries to AI models while querying databases directly for structured data.',
    badge: 'AI & Local LLM',
  },
  {
    title: 'Healthletic Lifestyle',
    role: 'Flutter Developer Intern & Secondary TL',
    date: 'May 2025 – Oct 2025',
    detail: 'Acted as Secondary Team Lead and Flutter Developer Intern—spearheading task allocation, presenting updates in executive meetings, drafting MOM docs, and engineering meal planning and workout tracking modules.',
    badge: 'Mobile & Leadership',
  },
  {
    title: 'GT Softwares',
    role: 'Flutter Developer (Internship)',
    date: 'Apr 2024 – Jun 2024',
    detail: 'Built an ERP-based Progress Tracker managing 5 industrial manufacturing modules (Melting, Molding, Fettling, Masters, Maintenance) using Firebase, and contributed to UI and API features for GT Poll Version 5.',
    badge: 'Full-Stack ERP',
  },
]

export const CurrentlyWorkingOn = () => {
  return (
    <section id="working" className="bg-[#081711] py-[120px] max-md:py-[80px] relative overflow-hidden">
      <div className="wrap max-w-[1280px] mx-auto px-16 max-md:px-6">

        <div className="reveal mb-16">
          <div className="sec-label flex items-center gap-[14px] mb-4">
            <div className="sec-label-line w-7 h-[1px] bg-[#0D6E4F]"></div>
            <span className="sec-label-txt font-mono text-[10px] tracking-[.45em] uppercase text-[#10B981]">Professional Experience</span>
          </div>
          <h2 className="sec-title font-display font-black text-[clamp(36px,5vw,72px)] leading-[1.05] text-white">
            Intern<em className="text-[#10B981] not-italic">ships.</em>
          </h2>
        </div>

        <div className="working-timeline relative max-w-[800px] pl-10 max-md:pl-6 max-md:max-w-full">
          <div className="tl-line absolute left-0 top-0 bottom-0 w-[1px] bg-[#0D6E4F]/20">
            <div className="tl-line-fill absolute inset-0 bg-gradient-to-b from-[#0D6E4F] via-[#10B981]/40 to-transparent"></div>
          </div>

          {ITEMS.map((item, i) => (
            <div key={i}
              className="reveal tl-item relative mb-14 last:mb-0 group"
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="tl-dot absolute left-[-46px] max-md:left-[-24px] max-md:-translate-x-1/2 top-6 w-3 h-3 bg-[#0A1C15] border-2 border-[#10B981] z-10 transition-all duration-400 group-hover:scale-125 group-hover:bg-[#10B981] group-hover:shadow-[0_0_12px_#10B981]"></div>

              <div className="working-card p-8 border border-[#0D6E4F]/15 bg-[#0A1C15] relative overflow-hidden transition-all duration-500 hover:border-[#0D6E4F]/40 hover:translate-x-2">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0D6E4F] to-transparent scale-x-0 origin-left transition-transform duration-600 group-hover:scale-x-100"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(13,110,79,0.06),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="wc-header flex items-start sm:items-center justify-between gap-4 mb-5 flex-col sm:flex-row">
                  <div>
                    <h3 className="wc-title font-display text-[22px] font-bold text-white tracking-wide mb-1.5">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5 text-[12.5px] font-mono tracking-wider">
                      <span className="text-[#10B981] font-semibold">{item.role}</span>
                      <span className="w-1 h-1 rounded-full bg-[#10B981]/60 hidden sm:inline-block"></span>
                      <span className="text-white/70 bg-[#0D6E4F]/15 px-2.5 py-0.5 rounded border border-[#0D6E4F]/40">{item.date}</span>
                    </div>
                  </div>
                  <div className="wc-badge font-mono text-[11px] tracking-[.22em] uppercase px-4 py-1.5 bg-[#0D6E4F]/15 border border-[#0D6E4F]/40 text-[#10B981] rounded-full whitespace-nowrap self-start">
                    {item.badge}
                  </div>
                </div>

                <p className="wc-detail text-[16px] text-white/80 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}