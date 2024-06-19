'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function NextThemeProvider({children}){
    return (
        <NextThemesProvider attribute="class" enableSystem>
            {children}
        </NextThemesProvider>
    )
}