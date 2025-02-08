// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../features/newsSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer, // Adicionando o reducer do slice de notícias
  },
});