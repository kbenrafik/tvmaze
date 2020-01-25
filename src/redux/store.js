import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';
import createClientMiddleware from './middleware/createClientMiddleware';

/**
 * Configure store
 * @param initialState
 * @param client sdk
 * @returns {Store<{}, AnyAction> & Store<S & {}, A> & {dispatch: Dispatch<A>}}
 */
const configureStore = (initialState = {}, client) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      createClientMiddleware(client),
      thunk,
      logger
    )
  );
};

export default configureStore;