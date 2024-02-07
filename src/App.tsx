import { Outlet, Route, Routes } from 'react-router-dom'
import Home from '@/Home'
import { Header } from '@/components/header'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bestiaire" />
        <Route path="/objets-magiques" />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
