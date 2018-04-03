import { createStore } from 'redux';
import rootReducer from './reducers/index';

let ConfigureStores = createStore(rootReducer);

export default ConfigureStores;
