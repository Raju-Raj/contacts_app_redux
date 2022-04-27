import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactReducer } from './reducers/contact';

export const store=createStore(contactReducer,composeWithDevTools())