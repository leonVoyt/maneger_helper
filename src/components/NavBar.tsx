'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const pathName = usePathname()
  const route = useRouter()
  console.log(pathName)

  return (
    <nav className="flex justify-between text-sm">
      {pagesList.map((page) => (
        <button
          onClick={() => route.push(page.route)}
          key={page.id}
          className={`flex-auto border-y-2 border-r-2 border-main-border h-12 rounded-t-md ${
            page.name === 'Иерархия' ? 'border-l-2' : ''
          } ${
            pathName === page.route
              ? 'border-2 border-b-0 text-accent shadow-main-glow'
              : ''
          }`}
        >
          {page.name}
        </button>
      ))}
    </nav>
  )
}

export default NavBar

const pagesList = [
  { id: 0, name: 'Иерархия', route: '/' },
  { id: 1, name: 'Должности', route: '/positions' },
  { id: 2, name: 'Список персонала', route: '/stafflist' },
  { id: 3, name: 'Наборы экиперовки', route: '/equipmentsets' },
]
