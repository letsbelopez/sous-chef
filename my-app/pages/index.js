import React, { Component } from 'react'
import { Card, Page, Layout } from '@shopify/polaris'
import DatePopover from '../components/DatePopover'
import OrderTotalsTable from '../components/OrderTotalsTable'
import { OrderConsumer } from '../components/OrderProvider'


class App extends Component {

  render() {
    return (
      <Page title="Meal Totals">
          <OrderConsumer>
            {({getOrders, orders, requestInProgress}) => (
              <Layout>
              <Layout.Section>
                <Card
                  title="Search criteria"
                  primaryFooterAction={{
                    content: "Total meals",
                    onAction: getOrders
                  }}>
                  <Card.Section title="Choose date">
                    Select meals ordered from <DatePopover /> to today.{" "}
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section>
                <Card>
                  <OrderTotalsTable orders={orders} requestInProgress={requestInProgress} />
                </Card>
              </Layout.Section>
            </Layout>
          )}
        </OrderConsumer>
      </Page>
    )
  }
}

export default props => (<App />)
