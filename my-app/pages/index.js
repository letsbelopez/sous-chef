import React, { Component } from 'react'
import { Card, Page, Layout } from '@shopify/polaris'
import DatePopover from '../components/DatePopover'


class App extends Component {
  render() {
    return (
      <Page title="Meal Totals">
        <Layout>
          <Layout.Section>
            <Card
              title="Search criteria"
              primaryFooterAction={{
              content: "Total meals",
              onAction: this.handleClick
            }}>
              <Card.Section title="Choose date">
                Select meals ordered from <DatePopover /> to today.{" "}
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    )
  }
}

export default props => (<App />)
