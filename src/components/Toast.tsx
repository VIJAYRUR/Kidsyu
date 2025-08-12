import React, { createContext, useContext, useMemo, useRef, useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export type ToastVariant = 'default' | 'success' | 'error'
export type ToastOptions = {
  title?: string
  description?: string
  variant?: ToastVariant
  duration?: number // ms
}

type ToastItem = Required<ToastOptions> & { id: number }

const ToastContext = createContext<{
  push: (opts: ToastOptions) => void
  remove: (id: number) => void
} | null>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const idRef = useRef(0)

  const api = useMemo(() => ({
    push: (opts: ToastOptions) => {
      const id = ++idRef.current
      const item: ToastItem = {
        id,
        title: opts.title ?? '',
        description: opts.description ?? '',
        variant: opts.variant ?? 'default',
        duration: opts.duration ?? 3200,
      }
      setToasts((t) => [...t, item])
      if (item.duration) {
        window.setTimeout(() => {
          setToasts((t) => t.filter((x) => x.id !== id))
        }, item.duration)
      }
    },
    remove: (id: number) => setToasts((t) => t.filter((x) => x.id !== id)),
  }), [])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[100] flex max-w-sm flex-col gap-2 sm:right-6 sm:top-6">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              'pointer-events-auto flex items-start gap-3 rounded-lg border bg-card p-4 shadow-lg ring-1 ring-border/50' +
              (t.variant === 'success'
                ? ' border-emerald-500/30'
                : t.variant === 'error'
                ? ' border-rose-500/30'
                : '')
            }
          >
            {t.variant === 'success' ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
            ) : t.variant === 'error' ? (
              <XCircle className="mt-0.5 h-5 w-5 text-rose-400" />
            ) : null}
            <div className="min-w-0">
              {t.title ? <p className="font-semibold leading-5">{t.title}</p> : null}
              {t.description ? (
                <p className="mt-0.5 text-sm text-card-foreground/80">{t.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>')
  return {
    toast: ctx.push,
    dismiss: ctx.remove,
  }
}

