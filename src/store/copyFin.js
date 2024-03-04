import { createSlice } from '@reduxjs/toolkit';

const transfer = createSlice({
  name: 'transfer',
  initialState: {
    key: '',
    all: true,
    1: true,
    2: true,
    3: true,
    0: true,
  },
  reducers: {
    getKey(state, action) {
      const stateNew = { ...state };
      stateNew.key = action.payload.searchId;
      return stateNew;
    },
    dontAll(state) {
      const stateNew = { ...state };
      if (stateNew.all) {
        stateNew.all = false;
        stateNew[1] = false;
        stateNew[2] = false;
        stateNew[3] = false;
        stateNew[0] = false;
      } else {
        stateNew.all = true;
        stateNew[1] = true;
        stateNew[2] = true;
        stateNew[3] = true;
        stateNew[0] = true;
      }

      return stateNew;
    },
    ones(state, actions) {
      console.log(actions);
      const stateNew = { ...state };
      console.log(stateNew[actions.payload]);
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
            stateNew[actions.payload] = false;
            stateNew.all = false;
          } else {
            stateNew[actions.payload] = true;
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
export const { dontAll, ones, getKey } = transfer.actions;
