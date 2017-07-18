// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reactReducer from  './reducers/reactReducer';
// TODO: fix webpack loader to allow import * from './reducers'


export default compose(
  applyMiddleware(thunk)
)(createStore)(combineReducers({reactReducer}));
