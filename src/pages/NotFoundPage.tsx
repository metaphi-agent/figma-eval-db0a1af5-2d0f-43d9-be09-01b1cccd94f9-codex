import { Link } from 'react-router-dom'
import { PhoneFrame } from '../components/PhoneFrame'

export default function NotFoundPage() {
  return (
    <PhoneFrame className="p-6">
      <div className="text-center">
        <div className="text-sm font-semibold text-(--color-charcoal-100)">Not found</div>
        <div className="mt-1 text-xs text-(--color-charcoal-30)">That route does not exist.</div>
        <Link
          to="/"
          className="mt-4 inline-flex rounded-full bg-(--color-mango-100) px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-(--color-orange-100)"
        >
          Back to screens
        </Link>
      </div>
    </PhoneFrame>
  )
}

