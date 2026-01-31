import { Link } from 'react-router-dom'
import { getScreenSrc, type ScreenMeta } from '../data/screens'
import { PhoneFrame } from '../components/PhoneFrame'

export default function ScreenPage({ screen }: { screen: ScreenMeta }) {
  return (
    <PhoneFrame className="bg-white">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white/90 px-4 py-3 backdrop-blur">
        <Link
          to="/"
          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-(--color-charcoal-100) transition-colors hover:bg-(--color-charcoal-5)"
        >
          Back
        </Link>
        <div className="min-w-0 flex-1 text-center">
          <div className="truncate text-xs font-semibold text-(--color-charcoal-100)">{screen.name}</div>
          <div className="truncate text-[11px] text-(--color-charcoal-30)">/{screen.route}</div>
        </div>
        <a
          href={getScreenSrc(screen.imageFile)}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-(--color-charcoal-100) transition-colors hover:bg-(--color-charcoal-5)"
        >
          PNG
        </a>
      </div>

      <img src={getScreenSrc(screen.imageFile)} alt={screen.name} className="w-full h-auto" />
    </PhoneFrame>
  )
}

