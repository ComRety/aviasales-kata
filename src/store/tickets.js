import { createSlice } from '@reduxjs/toolkit';

import getTickets from './getTickets';

const ticketsSlce = createSlice({
  name: 'ticllets',
  initialState: {
    tikets: [],
    isloading: false,
    error: 200,
    key: '',
    stop: false,
  },
  reducers: {
    getKey(state, action) {
      state.key = action.payload.searchId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.isloading = true;
        state.error = 200;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        if (action.payload.tickets) {
          state.stop = action.payload.stop;
          state.tikets.push(...action.payload.tickets);
        }
        state.isloading = false;
        state.error = 200;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.stop = true;
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default ticketsSlce.reducer;
export const { getKey } = ticketsSlce.actions;
