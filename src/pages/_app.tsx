import { Layout } from '@/components/common/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CurrentCommunityProvider } from './context/CurrentCommunityContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentCommunityProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CurrentCommunityProvider>
  )
}
