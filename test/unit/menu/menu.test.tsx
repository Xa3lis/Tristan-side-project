import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MenuList } from '@/components/menuList'
import { menuItemsMock } from '&/mocks/menu'

it('header should have three elements', () => {
  expect.assertions(3)
  render(<MenuList elements={menuItemsMock} />, { wrapper: BrowserRouter })
  menuItemsMock.map(element => expect(screen.getByTestId(element.label)).toBeInTheDocument())
})
