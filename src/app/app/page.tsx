'use client';

import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { chakra, Box, Button, IconButton, Text } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue } from '@chakra-ui/system'
import Image from 'next/image';

import Logo from '../images/logo.svg';
import LogoWhite from '../images/logo-white.svg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as='main' h='calc(100vh)' p={5}>
      <Text as='h1'> Theme test page </Text>

      <br/>

      <IconButton 
        aria-label='Toggle theme' 
        onClick={() => { toggleColorMode(); console.log('theme: ', colorMode); }}
        icon={colorMode === 'dark' ? <SunIcon />: <MoonIcon /> } />

      <Button> Dummy button </Button>

      <br/>
      <br/>

      <Image
        src={useColorModeValue(Logo, LogoWhite)}
        alt="Bull Bitcoin logo"
        width="371" height="68"
      />

    </Box>
  )
}
