import { MenuItemEntry } from '@/models/enums'
import type { IMenuItem } from '@/models/menu'

export const menuItemsMock: IMenuItem[] = [
  { to: '/', label: MenuItemEntry.ACCUEIL },
  { to: '/objets-magiques', label: MenuItemEntry.OBJETS },
  { to: '/bestiaire', label: MenuItemEntry.BESTIAIRE },
]
