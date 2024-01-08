import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  activeNav: 'Home' | 'Posts' | 'Tags' | 'About'
}

interface Action {
  setActiveNav: (activeNav: State['activeNav']) => void
}

export const useNavStore = create<State & Action>()(
  persist(
    (set) => ({
      activeNav: 'Home',
      setActiveNav: (activeNav: State['activeNav']) => set({ activeNav })
    }),
    {
      name: 'useNavStore'
    }
  )
)
