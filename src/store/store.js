import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga'

import { rootReducer } from './root-reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  process.env.NODE_ENV === 'development' && logger,
  // thunk,
  sagaMiddleware,
].filter(Boolean)

const composeEnhancer =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
