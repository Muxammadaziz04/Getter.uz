import { Provider } from 'react-redux';
import MainLayout from 'components/Layouts/Main';
import { store } from '../store/index';
import { Suspense } from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.scss'
import '../components/Pages/About/About.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MainLayout>
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
          <Component {...pageProps} />
        </MainLayout>
      </Suspense>
    </Provider>
  )
}

export default MyApp
