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
    progress: 0,
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
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        if (action.payload.stop) {
          state.progress = 100;
        }
        state.progress += 5;
        if (action.payload.tickets) {
          state.tikets.push(...action.payload.tickets);
          if (action.payload.stop) {
            state.stop = action.payload.stop;
          }
        }
        state.isloading = false;
      })
      .addCase(getTickets.rejected, (state, action) => {
        console.log('ERROR');
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default ticketsSlce.reducer;
export const { getKey } = ticketsSlce.actions;
