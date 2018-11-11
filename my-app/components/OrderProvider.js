import React, { Component } from 'react'

const OrderContext = React.createContext();

class OrderProvider extends Component {
  state = {
    path: '',
    dates: null,
    orders: []
  }

  getOrders = () => {
    console.log('getting orders');
  }

  updatePath = (dates) => {
    const path = `/orders.json?processed_at_min=${dates.start.toISOString()}`
    this.setState({ path })
  }

  updateDates = (dates) => {
    this.setState({ dates })
  }

  render() {
    return (
      <OrderContext.Provider 
        value={{
          path: this.state.path,
          dates: this.state.dates,
          orders: this.state.orders,
          getOrders: this.getOrders,
          updateDates: this.updateDates,
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