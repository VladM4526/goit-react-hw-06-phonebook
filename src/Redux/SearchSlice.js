import { createSlice } from '@reduxjs/toolkit';

const serachInitialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState: serachInitialState,
  reducers: {
    changeFilterValue(state, action) {
      return action.payload;
    },
  },
});

export const { changeValueSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
