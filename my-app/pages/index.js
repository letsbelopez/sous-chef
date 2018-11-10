import Link from 'next/link'
import React, { Component } from 'react'
import { Page } from '@shopify/polaris'
import { OrderConsumer } from '../components/OrderProvider'
import OrderDatePicker from '../components/OrderDatePicker'

class App extends Component {
  render() {
    return (
        <Page
          title="My application"
          primaryAction={{ url: '/shops', content: 'List Shops' }}
          >
          <OrderConsumer>
            {({ path }) => (
              <div>
                <p>Path: {path}</p>
              </div>
            )}
          </OrderConsumer>
          <OrderDatePicker />
          <ul>
            <li><Link prefetch href='/shops'><a>List Shops</a></Link></li>
            <li><Link prefetch href='/products'><a>List Products</a></Link></li>
            <li><Link href='/b' as='/a'><a>a</a></Link></li>
            <li><Link href='/a' as='/b'><a>b</a></Link></li>
          </ul>
        </Page>
    )
  }
}

export default props => (<App />)
