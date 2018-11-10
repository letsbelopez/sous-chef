import React, { Component } from "react";
import { DatePicker, FormLayout } from "@shopify/polaris";
import { OrderConsumer } from "../components/OrderProvider";

const today = new Date();

class OrderDatePicker extends Component {
  state = {
    month: today.getMonth(),
    year: today.getFullYear()
  }

  handleMonthChange = (month, year) => {
    this.setState({
      month,
      year
    })
  }

  render() {
    const { month, year, selected } = this.state;

    return (
      <FormLayout>
        <OrderConsumer>
          {({ updatePath }) => (
            <DatePicker
              month={month}
              year={year}
              onChange={value => {
                updatePath(value);
                // this.props.togglePopover();
              }}
              onMonthChange={this.handleMonthChange}
              //selected={selected}
              allowRange={false}
            />
          )}
        </OrderConsumer>
      </FormLayout>
    )
  }
}

export default OrderDatePicker
