import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (programType) => {
    const response = await axios.get(URL);
    return response.data.entries.filter(item => 
      item.programType === programType && 
      item.releaseYear >= 2010
    );
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    items: [],
    status: 'idle', 
    currentType: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default contentSlice.reducer; 