import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import ConfirmationCheckout from './pages/ConfirmationCheckout'
import Home from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<ConfirmationCheckout />} />
      </Route>
    </Routes>
  )
}
