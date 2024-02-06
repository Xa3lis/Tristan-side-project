import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <div className="navbar bg-stone-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl"><Link to="/">JDR WOW</Link></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-2">
            <li><Link to="/">ACCUEIL</Link></li>
            <li><Link to="/objets-magiques">OBJETS MAGIQUES</Link></li>
            <li><Link to="/bestiaires">BESTIAIRE</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn btn-ghost"><i className="fa-solid fa-circle-half-stroke fa-2xl"></i></a>
          <a className="btn btn-ghost"><i className="fa-regular fa-user fa-2xl" aria-hidden="true"></i></a>
        </div>
      </div>
    </header>
  )
}
