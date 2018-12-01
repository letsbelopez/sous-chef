import React, { Component } from "react";
import { Card, Layout, Page, Tabs } from "@shopify/polaris";
import DatePopover from "../components/DatePopover";
import OrderTotalsTable from "../components/OrderTotalsTable";
import IngredientTotalsTable from "../components/IngredientTotalsTable";
import { OrderConsumer } from "../components/OrderProvider";

class App extends Component {
  state = {
    selected: 0,
    tabs: [
      {
        id: "order-totals",
        content: "Order totals",
        accessibilityLabel: "Order totals",
        panelID: "order-totals"
      },
      {
        id: "ingredient-totals",
        content: "Ingredient totals",
        accessibilityLabel: "Ingredient totals",
        panelID: "ingredient-totals"
      }
    ]
  };

  handleTabChange = selectedTabIndex => {
    this.setState({ selected: selectedTabIndex });
  };

  renderTabContent = (orders, requestInProgress) => {
    const selected = this.state.selected;
    if (selected === 0) {
      return (
        <OrderTotalsTable
          orders={orders}
          requestInProgress={requestInProgress}
        />
      );
    } else {
      return (
        <IngredientTotalsTable
          orders={orders}
          requestInProgress={requestInProgress}
        />
      );
    }
  };

  render() {
    return (
      <Page title="Meal Totals">
        <OrderConsumer>
          {({ getOrders, orders, requestInProgress }) => (
            <Layout>
              <Layout.Section>
                <Card
                  title="Search criteria"
                  primaryFooterAction={{
                    content: "Total meals",
                    onAction: getOrders
                  }}
                >
                  <Card.Section title="Choose date">
                    Select meals ordered from <DatePopover /> to today.{" "}
                  </Card.Section>
                </Card>
              </Layout.Section>
              <Layout.Section>
                <Card>
                  <Tabs
                    tabs={this.state.tabs}
                    selected={this.state.selected}
                    onSelect={this.handleTabChange}
                    fitted={false}
                  />
                  {this.renderTabContent(orders, requestInProgress)}
                </Card>
              </Layout.Section>
            </Layout>
          )}
        </OrderConsumer>
      </Page>
    );
  }
}

export default props => <App />;
