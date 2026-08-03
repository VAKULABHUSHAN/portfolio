const STRENGTHS = [
  {
    emoji: '🧠',
    title: 'Systematic Problem Solving',
    desc: 'Deconstructing complex business requirements and architectural challenges into scalable, high-performance web and mobile solutions.',
  },
  {
    emoji: '🤝',
    title: 'Leadership & Collaboration',
    desc: 'Proven experience as a Team Lead—managing sprint POA, communicating across teams, public speaking, and organizing effective workflows.',
  },
  {
    emoji: '🤖',
    title: 'AI & Full-Stack Versatility',
    desc: 'Effortlessly bridging frontends (Flutter/Angular) and backends (Node/MongoDB/Firebase) with modern LLMs and local AI model routing.',
  },
  {
    emoji: '⚡',
    title: 'Time Management & Execution',
    desc: 'Delivering production-ready applications, ERP systems, and high-quality user experiences on schedule with rigorous attention to detail.',
  },
]

export const CoreStrengths = () => {
  return (
    <section id="strengths" className="bg-[#05100B] py-[120px] max-md:py-[80px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(13,110,79,0.06),transparent_70%)] pointer-events-none"></div>

      <div className="wrap max-w-[1780px] mx-auto px-16 max-md:px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <div className="sec-label flex items-center justify-center gap-[14px] mb-5">
            <div className="sec-label-line w-8 h-[1px] bg-[#0D6E4F]"></div>
            <span className="sec-label-txt font-mono text-[10.5px] tracking-[.48em] uppercase text-[#10B981]">Core Strengths</span>
            <div className="sec-label-line w-8 h-[1px] bg-[#0D6E4F]"></div>
          </div>
          <h2 className="sec-title font-display font-black text-[clamp(40px,5.5vw,80px)] leading-[1.05] text-white">
            What I <span className="text-grad bg-gradient-to-r from-white via-[#10B981] to-white bg-[length:200%_auto] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] animate-[shimmer_5s_linear_infinite]">Bring.</span>
          </h2>
        </div>

        <div className="strengths-grid grid grid-cols-4 gap-6 max-md:grid-cols-1 max-md:gap-5">
          {STRENGTHS.map((s, i) => (
            <div
              key={i}
              className="reveal strength-card p-8 border border-[#0D6E4F]/20 bg-[#0A1C15] relative overflow-hidden transition-all duration-500 hover:border-[#0D6E4F]/50 group hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(13,110,79,0.12)]"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D6E4F] to-[#10B981] scale-x-0 origin-left transition-transform duration-600 group-hover:scale-x-100"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(13,110,79,0.14),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="sc-icon text-5xl mb-6 block text-[#10B981]/90 group-hover:text-[#10B981] transition-colors duration-400">
                {s.emoji}
              </div>
              <h3 className="sc-title font-display text-[20px] font-bold text-white mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="sc-desc text-[17px] text-white/80 leading-[1.65] font-normal">
                {s.desc}
              </p>

              <div className="sc-dot absolute bottom-5 right-5 w-2.5 h-2.5 rounded-full bg-[#10B981] opacity-0 transition-all duration-400 group-hover:opacity-90 group-hover:scale-150"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0%{ background-position:-200% 0; } 100%{ background-position:200% 0; } }
      `}</style>
    </section>
  )
}