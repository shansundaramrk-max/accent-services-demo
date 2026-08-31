import { useState } from 'react'
import { services } from '@/data/services'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-lineDark rounded-2xl p-10 text-center">
        <p className="font-display text-2xl mb-3">Message sent.</p>
        <p className="text-mutedDark">Someone from Accent will get back to you shortly. Thanks for reaching out.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <Field label="Full name" name="name" required />
      <Field label="Company" name="company" required />
      <Field label="Work email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" />
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="companySize">Company size</label>
        <select id="companySize" name="companySize" className="border border-lineDark rounded-lg px-4 py-3 text-sm bg-paper focus:border-ink">
          <option>1–10 employees</option>
          <option>11–50 employees</option>
          <option>51–200 employees</option>
          <option>200+ employees</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="service">Service interested in</label>
        <select id="service" name="service" className="border border-lineDark rounded-lg px-4 py-3 text-sm bg-paper focus:border-ink">
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2 flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="requirement">What are you trying to solve?</label>
        <textarea id="requirement" name="requirement" rows={4} className="border border-lineDark rounded-lg px-4 py-3 text-sm bg-paper focus:border-ink" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium" htmlFor="contactMethod">Preferred contact method</label>
        <select id="contactMethod" name="contactMethod" className="border border-lineDark rounded-lg px-4 py-3 text-sm bg-paper focus:border-ink">
          <option>Email</option>
          <option>Phone</option>
          <option>Either</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="w-full sm:w-auto bg-ink text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-signal hover:text-ink transition-colors">
          Send message
        </button>
      </div>
    </form>
  )
}

function Field({ label, name, type = 'text', required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && <span className="text-signal"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} className="border border-lineDark rounded-lg px-4 py-3 text-sm bg-paper focus:border-ink outline-none" />
    </div>
  )
}
