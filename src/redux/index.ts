import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducers/User';

const rootReducer = {}

const store = configureStore({
  reducer: {
    user: UserReducer,

  }


});

export default store;