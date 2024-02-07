import type { MenuItemEntry } from '@/models/enums'

export interface IMenuItem {
  to: string
  label: MenuItemEntry
}

export interface IMenuList {
  elements: IMenuItem[]
}
