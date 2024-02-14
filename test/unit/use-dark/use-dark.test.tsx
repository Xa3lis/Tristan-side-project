const localStorageMock = (function () {
  let store = {} as Storage

  return {
    getItem(key: string) {
      return store[key]
    },

    setItem(key: string, value: string) {
      store[key] = value
    },

    clear() {
      store = {} as Storage
    },

    removeItem(key: string) {
      delete store[key]
    },

  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

it('should add data into local storage', () => {
  localStorage.setItem('myKey', 'myValue')
  expect(localStorage.getItem('myKey')).toBe('myValue')
})

it('should delete data from local storage', () => {
  localStorage.removeItem('myKey')
  expect(localStorage.getItem('myKey')).toBe(undefined)
})

it('should clear local storage', () => {
  localStorage.setItem('myKey', 'myValue')
  localStorage.setItem('myKey1', 'myValue')
  expect(localStorage.getItem('myKey')).toBe('myValue')
  expect(localStorage.getItem('myKey1')).toBe('myValue')
  localStorage.clear()
  expect(localStorage.getItem('myKey')).toBe(undefined)
  expect(localStorage.getItem('myKey1')).toBe(undefined)
})
