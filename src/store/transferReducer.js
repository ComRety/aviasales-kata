import { createSlice } from '@reduxjs/toolkit';

const transfer = createSlice({
  name: 'transfer',
  initialState: {
    all: true,
    oneS1: true,
    twoS2: true,
    threeS3: true,
    dontS0: true,
  },
  reducers: {
    dontAll(state) {
      const stateNew = { ...state };
      if (stateNew.all) {
        stateNew.all = false;
        stateNew.oneS1 = false;
        stateNew.twoS2 = false;
        stateNew.threeS3 = false;
        stateNew.dontS0 = false;
      } else {
        stateNew.all = true;
        stateNew.oneS1 = true;
        stateNew.twoS2 = true;
        stateNew.threeS3 = true;
        stateNew.dontS0 = true;
      }

      return stateNew;
    },
    ones(state, actions) {
      const keys = Object.keys(state);
      const values = Object.values(state);
      let count = 0;
      values.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
      if (state[actions.payload] && state.all) {
        keys.forEach((element) => {
          if (element === 'all' || element === actions.payload) {
            state[element] = false;
          } else {
            state[element] = true;
          }
        });
      } else if (!state[actions.payload] && count === 3) {
        state.all = true;
        state[actions.payload] = true;
      } else {
        state[actions.payload] = !state[actions.payload];
      }
    },
  },
});

export default transfer.reducer;
export const { dontAll, ones } = transfer.actions;
