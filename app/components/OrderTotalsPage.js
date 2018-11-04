import React, { Component } from "react";
import { Page, Layout, Card, Tabs } from "@shopify/polaris";
import { connect } from "react-redux";
import { sendOrdersRequest } from "../../client/actions";

import OrderTotalsTable from "./OrderTotalsTable";
import IngredientTotalsPage from "./IngredientTotalsPage";
import DatePopover from "./DatePopover";
import { formatDate } from "../../helpers";

class OrderTotalsPage extends Component {
  state = {
    selected: 0
  };

  renderTabContent = () => {
    const selected = this.state.selected;
    if (selected === 0) {
      return <OrderTotalsTable />;
    } else {
      return <IngredientTotalsPage />;
    }
  };

  handleTabChange = selectedTabIndex => {
    this.setState({ selected: selectedTabIndex });
  };

  handleClick = () => {
    const { dispatch, requestFields } = this.props;
    dispatch(sendOrdersRequest(requestFields));
  };

  componentDidMount() {
    this.handleClick();
  }

  render() {
    const date = this.props.dateRange.start;
    const dateRangeMessage = () => {
      const selectedDate = formatDate(date);
      const today = formatDate(Date.now());
      const message =
        selectedDate === today ? "today" : `from ${selectedDate} to ${today}`;

      return <p>{`Meals ordered ${message}`}</p>;
    };

    const { selected } = this.state;
    const tabs = [
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
    ];

    return (
      <Page title="Total Meals">
        <Layout>
          <Layout.Section>
            <Card
              title="Search criteria"
              primaryFooterAction={{
                content: "Total meals",
                onAction: this.handleClick
              }}
            >
              <Card.Section title="Choose date">
                Select meals ordered from <DatePopover /> to today.{" "}
              </Card.Section>
              <Card.Section title="Selected range">
                {dateRangeMessage()}
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <Tabs
                tabs={tabs}
                selected={selected}
                onSelect={this.handleTabChange}
                fitted={false}
              />
              {this.renderTabContent()}
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

function mapStateToProps({ dateRange, requestFields }) {
  return {
    dateRange,
    requestFields
  };
}

export default connect(mapStateToProps)(OrderTotalsPage);
