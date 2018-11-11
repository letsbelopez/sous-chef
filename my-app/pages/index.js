import React, { Component } from 'react'
import { Card, Page, Layout } from '@shopify/polaris'
import DatePopover from '../components/DatePopover'
import OrderTotalsTable from '../components/OrderTotalsTable'
import { OrderConsumer } from '../components/OrderProvider'


class App extends Component {

  render() {
    return (
      <Page title="Meal Totals">
        <Layout>
          <OrderConsumer>
            {({getOrders}) => (
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
            )}
          </OrderConsumer>
          <Layout.Section>
            <Card>
              {/* <OrderTotalsTable /> */}
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    )
  }
}

export default props => (<App />)
