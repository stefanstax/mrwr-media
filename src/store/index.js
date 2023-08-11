import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);
export { fetchUsers } from "./thunks/fetchUsers";
export { addUser } from "./thunks/addUser";
export { removeUser } from "./thunks/removeUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
