import React, { Component } from "react";
import { DatePicker, FormLayout } from "@shopify/polaris";
import { OrderConsumer } from "../components/OrderProvider";
import { updateDate } from "../../client/actions";

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
    const { month, year } = this.state;

    return (
      <FormLayout>
        <OrderConsumer>
          {({ updatePath, updateDates }) => (
            <DatePicker
              month={month}
              year={year}
              onChange={value => {
                updatePath(value)
                updateDates(value)
                this.props.togglePopover()
              }}
              onMonthChange={this.handleMonthChange}
              allowRange={false}
            />
          )}
        </OrderConsumer>
      </FormLayout>
    )
  }
}

export default OrderDatePicker
