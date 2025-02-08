// src/features/newsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setNews, setStatus, setError } = newsSlice.actions;

export default newsSlice.reducer;