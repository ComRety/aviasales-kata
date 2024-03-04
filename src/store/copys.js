import { createSlice } from '@reduxjs/toolkit';

const transfer = createSlice({
  name: 'transfer',
  initialState: {
    key: '',
    all: true,
    one: true,
    two: true,
    three: true,
    dont: true,
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
        stateNew.one = false;
        stateNew.two = false;
        stateNew.three = false;
        stateNew.dont = false;
      } else {
        stateNew.all = true;
        stateNew.one = true;
        stateNew.two = true;
        stateNew.three = true;
        stateNew.dont = true;
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
export const { dontAll, ones, getKey } = transfer.actions;
