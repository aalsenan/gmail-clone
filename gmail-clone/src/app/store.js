import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../features/userSlice';
export default configureStore({
  
  reducer: {
    mail: mailReducer,
    user: userReducer,
    
  }
  
});
