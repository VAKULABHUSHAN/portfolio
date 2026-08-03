import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'

const LINKS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M3 8L10.89 13.26C11.56 13.71 12.44 13.71 13.11 13.26L21 8M5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19Z" />
      </svg>
    ),
    label: 'EMAIL',
    value: 'vakulabhushannandhagopal2006@gmail.com',
    href: 'mailto:vakulabhushannandhagopal2006@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'PHONE',
    value: '+91-8344570007',
    href: 'tel:+918344570007',
  },
  {
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5V13.2a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
    label: 'LINKEDIN',
    value: 'linkedin.com/in/vakulabhushan-nj',
    href: 'https://www.linkedin.com/in/vakulabhushan-nj/',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: 'GITHUB',
    value: 'github.com/VAKULABHUSHAN',
    href: 'https://github.com/VAKULABHUSHAN',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    label: 'INSTAGRAM',
    value: 'instagram.com/vakul_23',
    href: 'https://www.instagram.com/vakul_23/',
  },
]

const PURPOSE_OPTIONS = [
  'Freelance Project',
  'Full-Time Opportunity',
  'Collaboration',
  'Consultation',
  'Other',
]

const ContactCard = ({ link, index, isInView }: { link: any; index: number; isInView: boolean }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(link.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4 + 0.1 * index }}
      className="group relative flex items-center gap-6 p-5 rounded-2xl border border-white/5 bg-[#071711]/80 backdrop-blur-xl transition-all duration-500 hover:border-[#0D6E4F]/50 hover:bg-[#0A1C15]"
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-[#10B981]/30 group-hover:bg-[#0D6E4F]/20 transition-all duration-500 text-[#10B981]">
        {link.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[12px] font-mono tracking-[0.3em] text-[#10B981] mb-0.5 opacity-80 uppercase">{link.label}</div>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-white/90 font-normal truncate block hover:text-[#10B981] transition-colors duration-300"
        >
          {link.value}
        </a>
      </div>
      <button
        onClick={handleCopy}
        className="relative z-10 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-[12px] font-mono tracking-widest text-white/60 hover:text-[#10B981] hover:border-[#10B981]/40 hover:bg-[#0D6E4F]/10 transition-all duration-300"
      >
        {copied ? 'COPIED' : 'COPY'}
      </button>
    </motion.div>
  )
}

export const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '', email: '', purpose: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, contact, email, purpose, message } = form
    if (!name || !email || !message) return

    setStatus('sending')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          contact_no: contact,
          from_email: email,
          purpose: purpose || 'Not specified',
          message,
          to_email: 'vakulabhushannandhagopal2006@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', contact: '', email: '', purpose: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputBase =
    'w-full bg-[#05100B]/75 border border-[#0D6E4F]/45 rounded-xl px-4 py-2.5 text-white text-[14px] placeholder:text-[#D4C5BA]/35 outline-none hover:border-[#10B981]/45 focus:border-[#10B981]/75 focus:bg-[#071711] transition-all duration-300 font-light font-sans appearance-none'
  const labelBase =
    'block font-mono text-[11px] tracking-[0.22em] text-[#10B981] uppercase mb-2 font-bold subpixel-antialiased'

  return (
    <section id="contact" ref={sectionRef} className="bg-[#05100B] py-24 max-md:py-16 relative overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-full h-[150vh] pointer-events-none opacity-20">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 4, ease: 'easeInOut' }}
            d="M800,0 C900,300 1000,500 800,1000 S500,1200 200,800"
            fill="none" stroke="#0D6E4F" strokeWidth="0.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 5, ease: 'easeInOut', delay: 1 }}
            d="M1000,200 C800,400 600,200 400,600 S200,800 0,1000"
            fill="none" stroke="#10B981" strokeWidth="0.5" opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-20 max-md:px-8 relative z-10">
        {/* Section label */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#0D6E4F]" />
            <span className="text-[14px] font-mono tracking-[0.5em] text-[#10B981] uppercase">Contact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-medium text-[clamp(40px,5.5vw,90px)] leading-[1.1] text-[#F8F4F0]"
          >
            Let's <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-[#10B981] via-[#0A8B5D] to-[#0D6E4F]">Collaborate.</span>
            <br />
            I'm Vakulabhushan.
          </motion.h2>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

          {/* Left: Bio + Resume + Contact Cards */}
          <div className="flex h-full flex-col justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[20px] text-[#F8F4F0]/75 font-normal leading-relaxed"
            >
              I specialise in{' '}
              <strong className="text-white font-medium hover:text-[#10B981] transition-colors">Flutter, Angular &amp; Full-Stack Systems</strong>,
              with hands-on experience delivering{' '}
              <strong className="text-white font-medium hover:text-[#10B981] transition-colors">4+ production systems</strong>{' '}
              across healthcare AI, industrial ERP operations, and high-performance cross-platform mobile apps.
            </motion.p>

            {/* Download Resume */}
            <motion.a
              id="download-resume-btn"
              href="/resume.pdf"
              download
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="group relative self-start inline-flex items-center gap-3 px-8 py-4 bg-[#0D6E4F]/80 text-white font-mono text-[13px] tracking-[0.35em] uppercase rounded-full overflow-hidden hover:shadow-[0_20px_40px_rgba(13,110,79,0.3)] transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0A8B5D] to-[#10B981] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-3">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                Download Resume
              </span>
            </motion.a>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">
              {LINKS.map((link, i) => (
                <ContactCard key={i} link={link} index={i} isInView={isInView} />
              ))}
            </div>
          </div>

          {/* Right: Direct Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-3xl border border-[#0D6E4F]/30 bg-[#071711]/70 backdrop-blur-xl p-6 lg:-mt-6 flex flex-col gap-4 shadow-[0_24px_80px_rgba(2,8,5,0.35)]"
          >
            {/* Form header — premium numbered style */}
            <div className="relative pb-5 border-b border-[#0D6E4F]/25">
              {/* Ghost large number */}
              <span className="absolute -top-3 -right-2 font-display font-black text-[80px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(16,185,129,0.08)] select-none pointer-events-none">
                01
              </span>
              <p className="font-mono text-[10px] tracking-[0.5em] text-[#6EE7B7]/75 uppercase mb-3">
                // New Message
              </p>
              <h3 className="font-display font-semibold text-[26px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F8F4F0] via-[#10B981]/80 to-[#F8F4F0]">
                Let's Build<br />Something Together
              </h3>
            </div>

            <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              {/* Name */}
              <div>
                <label className={labelBase}>Name *</label>
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              {/* Contact No & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelBase}>Contact No</label>
                  <input
                    id="form-contact"
                    name="contact"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.contact}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className={labelBase}>Email *</label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className={labelBase}>Purpose</label>
                <select
                  id="form-purpose"
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  className={`${inputBase} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-[#06120C]">Select a purpose…</option>
                  {PURPOSE_OPTIONS.map((p) => (
                    <option key={p} value={p} className="bg-[#06120C]">{p}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelBase}>Message *</label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  placeholder="Tell me about your project or idea…"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputBase} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                id="form-send-btn"
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="group relative mt-1 w-full overflow-hidden rounded-full bg-gradient-to-r from-[#0D6E4F] to-[#0A8B5D] py-4 font-mono text-[13px] tracking-[0.35em] uppercase text-white transition-all duration-500 hover:shadow-[0_15px_40px_rgba(13,110,79,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#0A8B5D] to-[#10B981] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative flex items-center justify-center gap-2">
                  {status === 'sending' && (
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  )}
                  {status === 'sent'
                    ? '✓ Message Sent!'
                    : status === 'error'
                      ? '✗ Failed — Try Again'
                      : status === 'sending'
                        ? 'Sending…'
                        : 'Send Message'}
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
