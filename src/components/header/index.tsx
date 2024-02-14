import { Switcher } from '@/components/switcher'
import type { IMenuItem } from '@/models/menu'
import MdiUserCircle from '~icons/mdi/user-circle'
import { MenuList } from '@/components/menuList'
import { MenuItemEntry } from '@/models/enums'

const menuItems: IMenuItem[] = [
  { to: '/', label: MenuItemEntry.ACCUEIL },
  { to: '/objets-magiques', label: MenuItemEntry.OBJETS },
  { to: '/bestiaire', label: MenuItemEntry.BESTIAIRE },
]

export function Header() {
  return (
    <nav className="navbar bg-base-100 shadow-lg dark:shadow dark:shadow-gray-500">
      <div className="navbar-start">
        <MenuList elements={menuItems} />
      </div>
      <div className="navbar-end gap-2">
        <Switcher />
        <a className="btn btn-ghost"><MdiUserCircle className="h-10 w-10" /></a>
      </div>
    </nav>
  )
}
