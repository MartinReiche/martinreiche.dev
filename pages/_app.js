import '../utils/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../utils/getPageContext';

import { StateProvider, rootReducer, initialState } from '../state';

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Martin Reiche - Full Stack Web Developer</title>
        </Head>
        {/* Wrap every page in Styles and Theme providers */}
        <StateProvider reducer={rootReducer} initialState={initialState}>
          <StylesProvider
            generateClassName={this.pageContext.generateClassName}
            sheetsRegistry={this.pageContext.sheetsRegistry}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <ThemeProvider theme={this.pageContext.theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </StateProvider>
      </Container>
    );
  }
}

export default MyApp;
