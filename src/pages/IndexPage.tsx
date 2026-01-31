import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getScreenSrc, SCREENS } from '../data/screens'
import { PhoneFrame } from '../components/PhoneFrame'

export default function IndexPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return SCREENS
    return SCREENS.filter((s) => s.name.toLowerCase().includes(q) || s.route.toLowerCase().includes(q))
  }, [query])

  return (
    <PhoneFrame className="p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-(--color-charcoal-100)">Oker Living</div>
          <div className="text-xs text-(--color-charcoal-30)">Screens ({filtered.length})</div>
        </div>
        <Link
          to="/plp-category"
          className="rounded-full bg-(--color-mango-100) px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-(--color-orange-100)"
        >
          Open Demo
        </Link>
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Search screens</span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search screens…"
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-(--color-charcoal-100) outline-none transition-shadow focus:ring-4 focus:ring-(--color-mango-20)"
        />
      </label>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {filtered.map((s) => (
          <Link
            key={s.id}
            to={`/${s.route}`}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow hover:shadow-md"
          >
            <img
              src={getScreenSrc(s.imageFile)}
              alt={s.name}
              loading="lazy"
              className="aspect-[9/16] w-full bg-(--color-charcoal-5) object-cover"
            />
            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-(--color-charcoal-100) line-clamp-2">{s.name}</div>
              <div className="mt-0.5 text-[11px] text-(--color-charcoal-30)">/{s.route}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-(--color-mango-1) p-3 text-xs text-(--color-charcoal-50)">
        This app renders exported Figma frames as reference-accurate screens. Use the index to jump between flows.
      </div>
    </PhoneFrame>
  )
}

