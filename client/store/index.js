import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

const requestFields = {
  verb: 'GET',
  path: `/orders.json?processed_at_min=${new Date().toISOString()}`,
};

const initState = {
  requestFields,
  requestInProgress: false,
  requestError: null,
  responseBody: '',
  ingredientRows: '',
  metafields: {},
  ingredients: {},
  dateRange: {
    start: new Date(),
    end: new Date(),
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_DATERANGE':
      return {
        ...state,
        dateRange: action.payload.selected,
      };
    case 'UPDATE_VERB':
      return {
        ...state,
        responseBody: '',
        requestFields: {
          ...state.requestFields,
          verb: action.payload.verb,
        },
      };
    case 'UPDATE_PATH':
      return {
        ...state,
        responseBody: '',
        requestFields: {
          ...state.requestFields,
          path: action.payload.path,
        },
      };
    case 'UPDATE_PARAMS':
      return {
        ...state,
        responseBody: '',
        requestFields: {
          ...state.requestFields,
          params: action.payload.params,
        },
      };
    case 'REQUEST_START':
      return {
        ...state,
        requestInProgress: true,
        requestError: null,
        responseBody: '',
        ingredientRows: '',
      };
    case 'REQUEST_COMPLETE':
      return {
        ...state,
        requestInProgress: false,
        requestError: null,
        responseBody: action.payload.responseBody,
      };
    case 'REQUEST_COMPLETE_ORDER_TOTALS':
      return {
        ...state,
        requestInProgress: false,
        requestError: null,
        responseBody: action.payload.responseBody,
        ingredientRows: action.payload.ingredientRows,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
        requestInProgress: false,
        requestError: action.payload.requestError,
      };
    default:
      return state;
  }
}

const middleware = applyMiddleware(thunkMiddleware, logger);

const store = createStore(reducer, middleware);

export default store;
