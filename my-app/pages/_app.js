import App, {Container} from 'next/app'
import React from 'react'
import { AppProvider } from '@shopify/polaris'
import '@shopify/polaris/styles.css'

global.isClient = typeof(window) !== 'undefined'

class MyApp extends App {
  render () {
    const
      {apiKey, shopOrigin} = isClient ? window : {apiKey: '', shopOrigin: ''},
      {Component, pageProps} = this.props
    return (
      <Container>
        <AppProvider shopOrigin={shopOrigin} apiKey={apiKey}>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    )
  }
}

export default MyApp
