import { ChakraProvider } from './ChakraProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}