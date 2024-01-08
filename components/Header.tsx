'use client'

import Link from 'next/link'

import { Site } from '@/content/config'
import Nav from './nav'

const Header = () => {
  return (
    <header className="flex items-center justify-between border-b py-8">
      <Link href="/">{Site.title}</Link>
      <Nav />
    </header>
  )
}

export default Header
