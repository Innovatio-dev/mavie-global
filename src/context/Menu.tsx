// Common
import { createContext, useContext, useState } from 'react'

const MenuContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export function MenuProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <MenuContext.Provider value={[isOpen, setIsOpen]}>
            { children }
        </MenuContext.Provider>
    )
}

export function useMenu() {
    const context = useContext(MenuContext)

    if (context === undefined) {
        throw new Error('useMenu must be used within a MenuProvider')
    }

    const [isOpen, setIsOpen] = context

    return {
        isOpen,
        setIsOpen
    }
}
