import {createStore} from 'redux';

import couterReducer from './reducer/counterReducer.js';

const store=createStore(couterReducer);

export default store ;