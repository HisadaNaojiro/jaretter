import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

let ConfigureStores = createStore(rootReducer , applyMiddleware(thunk));

export default ConfigureStores;
