import App, {Container} from 'next/app'
import React from 'react'
import { AppProvider } from '@shopify/polaris'
import OrderProvider from '../components/OrderProvider'
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
          <OrderProvider>
            <Component {...pageProps} />
          </OrderProvider>
        </AppProvider>
      </Container>
    )
  }
}

export default MyApp
