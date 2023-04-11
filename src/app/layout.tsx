'use client';

import dynamic from 'next/dynamic';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}


let themeValue;
if (typeof window !== 'undefined') 
  themeValue = localStorage.getItem('chakra-ui-color-mode') || 'dark';
else 
  themeValue = 'dark';

const theme = extendTheme({ 
  colors,
  config: {
    initialColorMode: themeValue
  }
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CacheProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

  /*
export default dynamic(() => Promise.resolve(RootLayout), { 
    ssr: false 
})
   */
