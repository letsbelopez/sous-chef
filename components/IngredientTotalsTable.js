import React, { Component } from "react";
import { OrderConsumer } from "./OrderProvider";
import { Card, DataTable } from "@shopify/polaris";

class IngredientTotalsTable extends Component {
  // TODO Get Ingredients on Sort to work
  onSort = (headingIndex, direction) => {
    const ingredients = this.state.ingredients;
    if (direction === "ascending") {
      ingredients.sort((a, b) => {
        if (a[headingIndex] < b[headingIndex]) {
          return -1;
        }
        if (a[headingIndex] > b[headingIndex]) {
          return 1;
        }
        return 0;
      });
    } else {
      ingredients.sort((a, b) => {
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

  render() {
    return (
      <Card.Section>
        <OrderConsumer>
          {({ ingredients }) => (
            <DataTable
              columnContentTypes={["text", "numeric", "text"]}
              headings={["Ingredient", "Quantity", "Measurement"]}
              sortable={[true, true]}
              defaultSortDirection="descending"
              onSort={this.onSort}
              rows={ingredients}
              // totals={["", "", totalProducts]}
              footerContent="by David Lopez"
            />
          )}
        </OrderConsumer>
      </Card.Section>
    );
  }
}

export default IngredientTotalsTable;
