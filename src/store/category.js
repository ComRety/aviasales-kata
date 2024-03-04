import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: true,
    count: 1,
  },
  reducers: {
    change(state) {
      state.value = !state.value;
      return state;
    },
    upCount(state) {
      state.count += 1;
      return state;
    },
  },
});

export default categorySlice.reducer;
export const { change, upCount } = categorySlice.actions;
