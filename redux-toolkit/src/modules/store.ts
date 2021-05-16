import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import optionReducer from './option';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    option: optionReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
