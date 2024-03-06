import { createAsyncThunk } from '@reduxjs/toolkit';

const getTickets = createAsyncThunk('tickets/fetch', async (key, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${key}`);
    if (res.status !== 200) {
      throw new Error(res.status);
    }
    const json = await res.json();
    return json;
  } catch (e) {
    return rejectWithValue(Number(e.message));
  }
});
export default getTickets;
