import { Link } from 'react-router-dom'
import type { IMenuList } from '@/models/menu'

export function MenuList({ elements }: IMenuList) {
  return (
    <ul className="menu menu-horizontal px-1 text-lg gap-2 uppercase">
      {elements.map((element, index) => <li key={index}><Link to={element.to} data-testid={element.label}>{element.label}</Link></li>)}
    </ul>
  )
}
