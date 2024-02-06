import { Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './components/header'
import Home from './Home'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bestiaires" />
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
