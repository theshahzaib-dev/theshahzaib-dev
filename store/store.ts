import { configureStore, createSlice } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
// Import API slices when created
// import { apiSlice } from "./api/apiSlice";

// Temporary UI slice so the store has at least one valid reducer.
// We can extend this later (e.g. for global loading states, modals, etc.).
const uiSlice = createSlice({
  name: "ui",
  initialState: {
    // example flag; extend as needed
    initialized: true,
  },
  reducers: {},
});

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authReducer,
    // api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

