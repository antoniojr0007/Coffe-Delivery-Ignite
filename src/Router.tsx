import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { CompleteOrder } from './pages/CompleteOrder'
import Home from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CompleteOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}
