import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gitReducer from './gitReducer';

const store = configureStore({
  reducer: {
    'gitReducer': gitReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;

export default store;
