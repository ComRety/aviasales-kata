import { createSlice } from '@reduxjs/toolkit';

const transfer = createSlice({
  name: 'transfer',
  initialState: {
    key: '',
    road: { all: true, 1: true, 2: true, 3: true, 0: true },
  },
  reducers: {
    getKey(state, action) {
      state.key = action.payload.searchId;
      return state;
    },
    dontAll(state) {
      if (state.road.all) {
        state.road.all = false;
        state.road[1] = false;
        state.road[2] = false;
        state.road[3] = false;
        state.road[0] = false;
      } else {
        state.road.all = true;
        state.road[1] = true;
        state.road[2] = true;
        state.road[3] = true;
        state.road[0] = true;
      }
      return state;
    },
    ones(state, actions) {
      console.log(state.road, actions);
      const keys = Object.keys(state.road);
      const values = Object.values(state.road);
      let count = 0;
      if (state.road[actions.payload] && state.road.all) {
        keys.forEach((element) => {
          if (element === 'all' || Number(element) === actions.payload) {
            state.road[Number(element)] = false;
          } else {
            state.road[Number(element)] = true;
          }
        });
      } else if (!state.road[actions.payload] && count === 4) {
        state.road.all = true;
        state.road[actions.payload] = true;
      } else {
        state.road[actions.payload] = !state.road[actions.payload];
      }
      console.log(count);
      values.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
      console.log(keys, values, count);
      return state;
    },
  },
});

export default transfer.reducer;
export const { dontAll, ones, getKey } = transfer.actions;
