import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../Api/api';

// Actions
const START = 'bookStore/book/START_LOADING_BOOK';
const LOAD = 'bookStore/book/LOAD_BOOK';
const ADD = 'bookStore/book/ADD_BOOK';
const REMOVE = 'bookStore/book/REMOVE_Book';
const FAIL = 'bookStore/book/LOADING_FAILED_BOOK';

const newBook = {
  item: [],
  loading: false,
  error: null,
};
// Reducer
export const bookReducer = (state = newBook, action = {}) => {
  const remove = (sourceList, value) => {
    const index = sourceList.indexOf(value);
    if (index >= 0 && index < sourceList.length) {
      return [
        ...sourceList.slice(0, index),
        ...sourceList.slice(index + 1),
      ];
    }
    return sourceList;
  };
  const { payload } = action;

  switch (action.type) {
    case 'bookStore/book/LOAD_BOOK/pending':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'bookStore/book/LOAD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: payload.value,
      };
    case 'bookStore/book/ADD_BOOK/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [...state.item, payload.value],
      };

    case 'bookStore/book/REMOVE_Book/fulfilled':
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: remove(state.item, state.item.filter((items) => items.id === payload.value)[0]),
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: payload.value.error,
        item: [],
      };
    default:
      return state;
  }
};

// Action Creators

export const loadBookFailed = (result) => ({ type: START, value: result });

const errorHandler = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
export const loadBook = createAsyncThunk(LOAD, async () => fetch(`${url}/books`)
  .then(errorHandler)
  .then((res) => res.json())
  .then((json) => {
    const books = [];
    Object.entries(json).forEach((key) => {
      const uuid = key[0];
      const { title, author } = key[1][0];
      const book = { id: uuid, title, author };
      books.push(book);
    });
    return { value: books };
  })
  .catch((error) => error));
export const addBook = createAsyncThunk(ADD, async (book) => fetch(`${url}/books`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: `${book.id}`,
    title: `${book.title}`,
    author: `${book.author}`,
    category: `${book.category}`,
  }),
  headers: {
    'Content-type': 'application/json',
  },
}).then(() => ({ value: book })));

export const removeBook = createAsyncThunk(REMOVE, (id) => fetch(`${url}/books/${id}`, {
  method: 'DELETE',
  body: '',
  headers: {
    'Content-type': 'application/json',
  },
}).then(() => ({ value: id })));
