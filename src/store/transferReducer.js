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
      const stateNew = { ...state };
      const keys = Object.keys(stateNew);
      const values = Object.values(stateNew);
      let count = 0;
      values.forEach((element) => {
        if (element) {
          count += 1;
        }
      });
      if (stateNew[actions.payload] && stateNew.all) {
        keys.forEach((element) => {
          if (element === 'all' || element === actions.payload) {
            stateNew[element] = false;
          } else {
            stateNew[element] = true;
          }
        });
      } else if (!stateNew[actions.payload] && count === 4) {
        stateNew.all = true;
        stateNew[actions.payload] = true;
      } else {
        stateNew[actions.payload] = !stateNew[actions.payload];
      }
      return stateNew;
    },
  },
});

export default transfer.reducer;
export const { dontAll, ones } = transfer.actions;
