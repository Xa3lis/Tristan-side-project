import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  )
}
