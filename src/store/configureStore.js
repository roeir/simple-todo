import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({ realtime: true });

export default () =>
  createStore(rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    ),
  );