import { Provider } from 'react-redux';
import { store } from 'store';
import { Suspense } from 'react';

import '../styles/globals.scss'
import MainLayout from 'components/Layouts/Main';

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
