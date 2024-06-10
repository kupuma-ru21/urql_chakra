// app/layout.tsx
import { fonts } from './fonts'
import { ChakraProvider } from './ChakraProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}