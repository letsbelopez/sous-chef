import React, { Component } from "react";

const OrderContext = React.createContext();

class OrderProvider extends Component {
  state = {
    path: "",
    dates: null,
    orders: [],
    ingredients: [],
    requestInProgress: false
  };

  buildIngredientRows = () => {
    const orders = this.state.orders;
    const promises = [];

    orders.forEach(row => {
      const p = this.getProductMetafields(row[1]);
      promises.push(p);
    });

    // TODO Finish ingredient totalling
    Promise.all(promises)
      .then(metafields => {
        const ingredientTotals = metafields
          .reduce((obj, metafield) => {
            if (metafield) {
              const value = JSON.parse(metafield[0].value);
              const ingredients = Object.keys(value).map(key => {
                return value[key];
              });

              return obj.concat(ingredients);
            }

            return obj;
          }, [])
          .reduce((obj, item) => {
            const { name, quantity, measurement } = item;
            if (!obj[name]) {
              obj[name] = {};
              obj[name].quantity = 0;
              obj[name].measurement = measurement;
            }
            obj[name].quantity += parseInt(quantity, 10);
            return obj;
          }, {});

        const rows = Object.keys(ingredientTotals).map(key => {
          return [
            key,
            ingredientTotals[key].quantity,
            ingredientTotals[key].measurement
          ];
        });
        this.setState({ ingredients: rows });
      })
      .catch(error => console.error(error));
  };

  buildOrderRows = orders => {
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

    const rows = Object.keys(productQuantities).map(key => {
      return [
        key,
        productQuantities[key].product_id,
        productQuantities[key].quantity
      ];
    });

    this.setState({ orders: rows, requestInProgress: false });
    this.buildIngredientRows();
  };

  getOrders = () => {
    this.setState({ requestInProgress: true });

    const fetchOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    };

    fetch(`/api${this.state.path}`, fetchOptions)
      .then(response => response.json())
      .then(json => {
        this.buildOrderRows(json.orders);
      })
      .catch(error => {
        console.error(error);
      });
  };

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
      .then(json => {
        const ingredients = json.metafields.filter(metafield => {
          return metafield.namespace === "sousChef";
        });
        if (ingredients.length > 0) {
          return ingredients;
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  updatePath = dates => {
    const path = `/orders.json?processed_at_min=${dates.start.toISOString()}`;
    this.setState({ path });
  };

  updateDates = dates => {
    this.setState({ dates });
  };

  render() {
    return (
      <OrderContext.Provider
        value={{
          path: this.state.path,
          dates: this.state.dates,
          ingredients: this.state.ingredients,
          orders: this.state.orders,
          getOrders: this.getOrders,
          getProductMetafields: this.getProductMetafields,
          updateDates: this.updateDates,
          updatePath: this.updatePath
        }}
      >
        {this.props.children}
      </OrderContext.Provider>
    );
  }
}

const OrderConsumer = OrderContext.Consumer;

export default OrderProvider;
export { OrderConsumer };
