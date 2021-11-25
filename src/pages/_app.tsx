import '@fontsource/montserrat';
import type { AppProps } from 'next/app';
import 'reset-css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
