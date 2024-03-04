import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';

import transfer from './transferReducer';
import tickets from './tickets';
import category from './category';

export default configureStore({
  reducer: {
    category,
    transfer,
    tickets,
  },
  composeWithDevTools,
});
