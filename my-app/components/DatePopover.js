import React, { Component } from "react";
import { Button, Popover } from "@shopify/polaris";
import { OrderConsumer } from "./OrderProvider";
import OrderDatePicker from "./OrderDatePicker";
import { formatDate } from "../helpers";

class DatePopover extends Component {
  state = {
    active: false
  };

  togglePopover = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };

  render() {
    const activator = (
      <OrderConsumer>
        {({ dates }) => (
          <Button onClick={this.togglePopover} disclosure>
            {dates === null ? 'Choose date' : formatDate(dates.start)}
          </Button>
        )}
      </OrderConsumer>
    );

    return (
      <div style={{ display: "inline-block" }}>
        <Popover
          active={this.state.active}
          activator={activator}
          onClose={this.togglePopover}
          sectioned
        >
          <OrderDatePicker togglePopover={this.togglePopover} />
        </Popover>
      </div>
    );
  }
}

export default DatePopover;
