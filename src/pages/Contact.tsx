import { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { useToast } from '@/components/Toast'

export default function Contact() {
  const { toast } = useToast()
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/mdkdberb', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        toast({ title: 'Thanks!', description: 'We received your message and will get back soon.', variant: 'success' })
        form.reset()
      } else {
        toast({ title: 'Something went wrong', description: 'Please try again in a moment.', variant: 'error' })
      }
    } catch (err) {
      toast({ title: 'Network error', description: 'Please check your connection and try again.', variant: 'error' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main>
      <section className="relative overflow-hidden">
        {/* subtle patterned backdrop */}
        <div className="absolute inset-0 -z-20 bg-grid-soft" />
        <div className="absolute inset-0 -z-10 aurora" />

        <div className="mx-auto max-w-screen-content container-px py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Let’s Connect</h1>
            <p className="mt-4 text-card-foreground/80">Questions, ideas, or partnerships? Drop us a note—our team reads every message.</p>
          </div>

          {/* crazy(ish) but classy form card */}
          <div className="relative mx-auto mt-10 max-w-3xl">
            {/* floating orbs */}
            <span className="orb absolute -left-10 top-6 h-24 w-24" />
            <span className="orb absolute -right-10 bottom-10 h-20 w-20" />

            <div className="neon-panel rounded-2xl p-[2px]">
              <div className="rounded-2xl border border-border/60 bg-card/80 p-6 shadow-xl backdrop-blur sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="hidden" name="_subject" value="Kidsyu Contact" />
                  <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name">
                      <input name="name" required placeholder="Jane Doe" className="input" />
                    </Field>
                    <Field label="Email">
                      <input name="email" type="email" required placeholder="you@example.com" className="input" />
                    </Field>
                  </div>

                  <Field label="Subject">
                    <input name="subject" placeholder="How can we help?" className="input" />
                  </Field>

                  <Field label="Message">
                    <textarea name="message" required rows={6} placeholder="Write your message here..." className="input resize-y" />
                  </Field>

                  <button type="submit" disabled={submitting} className="btn btn-primary w-full sm:w-auto disabled:opacity-60">
                    <Send className="mr-2 h-5 w-5" /> {submitting ? 'Sending…' : 'Send message'}
                  </button>

                
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-card-foreground/90">{label}</span>
      {children}
    </label>
  )
}

