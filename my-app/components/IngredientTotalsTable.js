import React, { Component } from "react";
import { OrderConsumer } from "./OrderProvider";
import { Card, DataTable } from "@shopify/polaris";

class IngredientTotalsTable extends Component {
  /*
    Ingredient Totals Todo
    1. What Api do I use for getting the product metafields?
    2. What data do I need for getting the product metafields?
    3. How do I get all the metafields for all the products that I need?
      3a. Promise.all()
    4. Once I get all the metafields, how do I total them 
        up and make rows for the table?


    Product metafield api:
    /api/products/#{id}/metafields.json
  */
  state = {
    ingredients: []
  };

  componentDidMount() {
    this.getProductMetafields(1873367990370).then(metafields =>
      console.log(metafields)
    );
  }

  getProductMetafields = id => {
    this.setState({ requestInProgress: true });

    const fetchOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    };

    return fetch(`/api/products/${id}/metafields.json`, fetchOptions)
      .then(response => response.json())
      .then(json => json)
      .catch(error => {
        console.error(error);
      });
  };

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
    const ingredients = this.state.ingredients;

    return (
      <Card.Section>
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
      </Card.Section>
    );
  }
}

export default IngredientTotalsTable;
