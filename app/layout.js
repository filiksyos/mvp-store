import './globals.css'

export const metadata = {
  title: 'MVP Store',
  description: 'A simplified store MVP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}