import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './Book/book';
import { categoriesReducer } from './Categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});

export default store;
