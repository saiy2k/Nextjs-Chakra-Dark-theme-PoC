'use client';

import dynamic from 'next/dynamic';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'

  /*
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

console.log('themeValue: ', themeValue);

const theme = extendTheme({ 
  colors,
  config: {
    initialColorMode: themeValue
  }
});
   */

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), { 
    ssr: false 
})
