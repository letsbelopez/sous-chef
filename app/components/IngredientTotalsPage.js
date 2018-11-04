import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "@shopify/polaris";

class IngredientTotalsPage extends Component {
  render() {
    return (
      <Card.Section>
        <p>Ingredient Totals Page</p>
      </Card.Section>
    );
  }
}

function mapStateToProps({ ingredientRows }) {
  return { ingredientRows };
}

export default connect(mapStateToProps)(IngredientTotalsPage);
