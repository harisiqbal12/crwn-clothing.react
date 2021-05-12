import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middewares));
export const persistor = persistStore(store);

