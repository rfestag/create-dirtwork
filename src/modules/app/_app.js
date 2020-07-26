import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import 'fontsource-roboto';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
