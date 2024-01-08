'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="link" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export default ModeToggle
