import { Layout } from '@/components/common/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CurrentCommunityProvider } from '@/context/CurrentCommunityContext'
import { CurrentUserProvider } from '@/context/CurrentUserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentUserProvider>
      <CurrentCommunityProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CurrentCommunityProvider>
    </CurrentUserProvider>
  )
}
