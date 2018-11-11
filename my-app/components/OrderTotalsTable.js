import React, { Component } from "react";
import { Card, DataTable, Spinner } from "@shopify/polaris";

class OrderTotalsTable extends Component {
  onSort = (headingIndex, direction) => {
    const orders = this.props.responseBody;
    if (direction === "ascending") {
      orders.sort((a, b) => {
        if (a[headingIndex] < b[headingIndex]) {
          return -1;
        }
        if (a[headingIndex] > b[headingIndex]) {
          return 1;
        }
        return 0;
      });
    } else {
      orders.sort((a, b) => {
        if (a[headingIndex] < b[headingIndex]) {
          return 1;
        }
        if (a[headingIndex] > b[headingIndex]) {
          return -1;
        }
        return 0;
      });
    }
  };

  renderTable() {
    //const orders = this.props.responseBody;

    const totalProducts = orders.reduce((total, row) => {
      return (total += row[2]);
    }, 0);

    return (
      <DataTable
        columnContentTypes={["text", "text", "numeric"]}
        headings={["Meal", "Product Id", "Quantity"]}
        sortable={[true, false, true]}
        defaultSortDirection="descending"
        onSort={this.onSort}
        rows={orders}
        totals={["", "", totalProducts]}
        footerContent="by David Lopez"
      />
    );
  }

  render() {
    const orders = this.props.responseBody;
    const requestInProgress = this.props.requestInProgress;

    if (requestInProgress) {
      return (
        <Card.Section>
          <div style={{ textAlign: "center" }}>
            <Spinner size="large" color="teal" accessibilityLabel="loading" />
          </div>
        </Card.Section>
      );
    }

    if (orders === "" || orders.length <= 0) {
      return (
        <Card.Section title="No meals found">
          <p>Try selecting or changing the date</p>
        </Card.Section>
      );
    }

    return <Card.Section>{this.renderTable()}</Card.Section>;
  }
}

export default OrderTotalsTable;
