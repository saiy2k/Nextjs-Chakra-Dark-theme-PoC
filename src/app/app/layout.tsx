'use client';

import dynamic from 'next/dynamic';

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
