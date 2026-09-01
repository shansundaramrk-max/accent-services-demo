import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { services } from '@/data/services'

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-[#182238] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all hover:border-white/20 focus:border-signal/70 focus:bg-[#1b2942] focus:ring-2 focus:ring-signal/10'

const selectButtonClass =
  'flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#182238] px-4 py-3.5 text-left text-sm outline-none transition-all hover:border-white/20 focus:border-signal/70 focus:bg-[#1b2942] focus:ring-2 focus:ring-signal/10'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-signal/20 bg-signal/[0.06] p-8 sm:p-10 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-signal text-ink text-lg font-semibold">
          ✓
        </div>
        <p className="font-display text-2xl text-white mb-3">Message sent.</p>
        <p className="text-white/55 leading-6 max-w-md mx-auto">
          Someone from Ascent will get back to you shortly. Thanks for reaching out.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />

        <SelectField
          label="Company size"
          id="companySize"
          options={['1–10 employees', '11–50 employees', '51–200 employees', '200+ employees']}
          placeholder="Select company size"
        />

        <SelectField
          label="Service interested in"
          id="service"
          options={services.map((s) => s.name)}
          placeholder="Not sure yet"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-white/80" htmlFor="requirement">
          What are you trying to solve?
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          placeholder="Tell us what is not working, what you want to improve, or what you are planning."
          className={`${fieldClass} resize-y min-h-[140px] leading-6`}
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-white/80 mb-3">Preferred contact method</legend>
        <div className="grid grid-cols-3 gap-2">
          <ContactOption name="contactMethod" value="Email" />
          <ContactOption name="contactMethod" value="Phone" />
          <ContactOption name="contactMethod" value="Either" defaultChecked />
        </div>
      </fieldset>

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-signal/10"
        >
          Send message
          <span aria-hidden="true" className="ml-2 text-base">→</span>
        </button>
        <p className="text-xs leading-5 text-white/35">
          We will only use these details to respond to your enquiry.
        </p>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="text-sm font-medium text-white/80" htmlFor={name}>
        {label}{required && <span className="text-signal"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldClass}
      />
    </div>
  )
}

function SelectField({
  label,
  id,
  options,
  placeholder,
}: {
  label: string
  id: string
  options: string[]
  placeholder: string
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col gap-2.5">
      <label className="text-sm font-medium text-white/80" htmlFor={`${id}-trigger`}>
        {label}
      </label>

      <div ref={rootRef} className="relative">
        <input type="hidden" id={id} name={id} value={value} />

        <button
          id={`${id}-trigger`}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className={selectButtonClass}
        >
          <span className={value ? 'text-white' : 'text-white/35'}>
            {value || placeholder}
          </span>
          <ChevronDown
            size={17}
            aria-hidden="true"
            className={`shrink-0 text-white/45 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {open && (
          <div
            role="listbox"
            aria-label={label}
            className="absolute left-0 right-0 top-[calc(100%+8px)] z-[80] max-h-64 overflow-y-auto rounded-xl border border-white/15 bg-[#121c30] p-1.5 shadow-2xl shadow-black/40 ring-1 ring-black/20"
          >
            {(id === 'companySize' || id === 'service') && (
              <OptionButton
                label={placeholder}
                selected={!value}
                muted
                onSelect={() => {
                  setValue('')
                  setOpen(false)
                }}
              />
            )}
            {options.map((option) => (
              <OptionButton
                key={option}
                label={option}
                selected={value === option}
                onSelect={() => {
                  setValue(option)
                  setOpen(false)
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function OptionButton({
  label,
  selected,
  muted = false,
  onSelect,
}: {
  label: string
  selected: boolean
  muted?: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onSelect}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
        selected
          ? 'bg-signal/10 text-white'
          : 'text-white/70 hover:bg-white/[0.08] hover:text-white'
      }`}
    >
      <span className={muted && !selected ? 'text-white/40' : ''}>{label}</span>
      {selected && <Check size={16} className="text-signal" aria-hidden="true" />}
    </button>
  )
}

function ContactOption({
  name,
  value,
  defaultChecked = false,
}: {
  name: string
  value: string
  defaultChecked?: boolean
}) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[.035] px-3 py-3 text-sm text-white/55 transition-all peer-checked:border-signal/60 peer-checked:bg-signal/10 peer-checked:text-white hover:bg-white/[.06]">
        {value}
      </span>
    </label>
  )
}
