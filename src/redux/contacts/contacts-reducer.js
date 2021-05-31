import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import actions from './contacts-actions';
import {
  fetchContactRequest,
  fetchContactSucess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  filterValue,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContactSucess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterValue]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSucess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const errorReducer = createReducer(false, {
  [fetchContactRequest]: () => false,
  [fetchContactSucess]: () => false,
  [fetchContactError]: () => true,

  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,

  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => true,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default contactsReducer;
