import { Navigate, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import NotFoundPage from './pages/NotFoundPage'
import ScreenPage from './pages/ScreenPage'
import { SCREENS } from './data/screens'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/home" element={<Navigate to="/plp-category" replace />} />

      {SCREENS.map((s) => (
        <Route key={s.id} path={`/${s.route}`} element={<ScreenPage screen={s} />} />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

