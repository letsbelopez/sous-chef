import React, { Component } from 'react'

const OrderContext = React.createContext();

class OrderProvider extends Component {
  state = {
    path: '',
    dates: null,
    orders: [],
    requestInProgress: false
  }

  buildOrderRows = (orders) => {
    const productQuantities = orders
      .reduce((obj, order) => {
        return [...obj, ...order.line_items];
      }, [])
      .reduce((obj, item) => {
        const { name, quantity, product_id } = item;
        if (!obj[name]) {
          obj[name] = {};
          obj[name].quantity = 0;
          obj[name].product_id = product_id;
        }
        obj[name].quantity += quantity;
        return obj;
      }, {});

    const rows = Object.keys(productQuantities).map((key) => {
      return [
        key,
        productQuantities[key].product_id,
        productQuantities[key].quantity,
      ];
    });

    this.setState({orders: rows, requestInProgress: false});
  }

  getOrders = () => {
    this.setState({requestInProgress: true});

    const fetchOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }

    fetch(`/api${this.state.path}`, fetchOptions)
      .then((response) => response.json())
      .then((json) => {
        this.buildOrderRows(json.orders)
      })
      .catch((error) => {
        console.error(error)
      })
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