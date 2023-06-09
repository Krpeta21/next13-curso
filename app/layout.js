import '../styles/globals.css'
import { Navigation } from '../components/Navigation'
import { font } from './font'
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Mi first app with next 13</title>
      </head>
      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
