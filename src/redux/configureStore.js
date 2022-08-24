import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { bookReducer } from './Book/book';
import { categoriesReducer } from './Categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
},
applyMiddleware(thunk));

export default store;
