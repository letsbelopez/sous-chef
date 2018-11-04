import { getMetafields } from '../../helpers';

export function updateDate(selected) {
  const path = `/orders.json?processed_at_min=${selected.start.toISOString()}`;

  return (dispatch) => {
    dispatch(updatePath(path));
    dispatch(updateDateRange(selected));
  };
}

export function updateMetafieldsPath(path) {
  return (dispatch) => {
    dispatch(updatePath(path));
  };
}

export function updateVerb(verb) {
  return {
    type: 'UPDATE_VERB',
    payload: {
      verb,
    },
  };
}

function updateDateRange(selected) {
  return {
    type: 'UPDATE_DATERANGE',
    payload: {
      selected,
    },
  };
}

export function updatePath(path) {
  return {
    type: 'UPDATE_PATH',
    payload: {
      path,
    },
  };
}

export function updateParams(params) {
  return {
    type: 'UPDATE_PARAMS',
    payload: {
      params,
    },
  };
}

export function updateIngredients(ingredients) {
  return {
    type: 'UPDATE_INGREDIENTS',
    payload: {
      ingredients,
    },
  };
}

export function sendRequest(requestFields) {
  const { verb, path, params } = requestFields;

  const fetchOptions = {
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (verb !== 'GET') {
    fetchOptions['body'] = params;
  }

  return (dispatch) => {
    dispatch(requestStartAction());

    return fetch(`/api${path}`, fetchOptions)
      .then((response) => response.json())
      .then((json) => dispatch(requestCompleteAction(json)))
      .catch((error) => {
        dispatch(requestErrorAction(error));
      });
  };
}

export function sendOrdersRequest(requestFields) {
  const { verb, path, params } = requestFields;

  const fetchOptions = {
    method: verb,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (verb !== 'GET') {
    fetchOptions['body'] = params;
  }

  return (dispatch) => {
    dispatch(requestStartAction());

    return fetch(`/api${path}`, fetchOptions)
      .then((response) => response.json())
      .then((json) => {
        dispatch(requestCompleteOrdersAction(json.orders));
      })
      .catch((error) => {
        dispatch(requestErrorAction(error));
      });
  };
}

function requestStartAction() {
  return {
    type: 'REQUEST_START',
    payload: {},
  };
}

function requestCompleteAction(json) {
  const responseBody = json;

  return {
    type: 'REQUEST_COMPLETE',
    payload: {
      responseBody,
    },
  };
}

function requestCompleteOrdersAction(json) {
  const productQuantities = json
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

  const responseBody = Object.keys(productQuantities).map((key) => {
    return [
      key,
      productQuantities[key].product_id,
      productQuantities[key].quantity,
    ];
  });

  return {
    type: 'REQUEST_COMPLETE_ORDER_TOTALS',
    payload: {
      responseBody,
    },
  };
}

function requestErrorAction(requestError) {
  return {
    type: 'REQUEST_ERROR',
    payload: {
      requestError,
    },
  };
}
