import '@styles/globals.css';

import Nav from '@components/Nav'; //declaring it here cause layout.jsx is consistent throughout all pages
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI prompts'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;