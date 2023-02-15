import { Provider } from 'react-redux';
import MainLayout from 'components/Layouts/Main';
import { store } from 'store';
import { Suspense } from 'react';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Suspense>
    </Provider>
  )
}

export default MyApp
