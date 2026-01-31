import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export function PhoneFrame({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className="min-h-screen w-full bg-(--color-charcoal-5) px-3 py-4">
      <div
        className={clsx(
          'mx-auto w-full max-w-[390px] overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

