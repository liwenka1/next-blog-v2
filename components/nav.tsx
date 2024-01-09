import Link from 'next/link'

import { Navs } from '@/data/config'
import ModeToggle from './mode-toggle'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathName = usePathname()

  return (
    <nav className="flex items-center justify-center">
      {Navs.map((nav, index) => (
        <Link
          key={index}
          href={nav.href}
          className={cn('mx-2', pathName === nav.href && 'underline decoration-wavy underline-offset-8')}
        >
          {nav.title}
        </Link>
      ))}
      <ModeToggle />
    </nav>
  )
}

export default Nav
