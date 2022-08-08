import reduxThunk from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const configureStore = preloadedState =>
  createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(reduxThunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default configureStore;