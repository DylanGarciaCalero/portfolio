import '@/styles/globals.css'
import BaseLayout from '@/layouts/baseLayout'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }) => {

  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </>
  )
}

export default App
