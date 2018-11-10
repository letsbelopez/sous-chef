import React, { Component } from 'react'

const OrderContext = React.createContext();

class OrderProvider extends Component {
  state = {
    path: '',
  }

  updatePath = (selectedDates) => {
    const path = `/orders.json?processed_at_min=${selectedDates.start.toISOString()}`;
    this.setState({ path });
  }

  render() {
    return (
      <OrderContext.Provider 
        value={{
          path: this.state.path,
          selectedDates: this.state.selectedDates,
          updatePath: this.updatePath
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    )
  }
}

const OrderConsumer = OrderContext.Consumer

export default OrderProvider
export { OrderConsumer }