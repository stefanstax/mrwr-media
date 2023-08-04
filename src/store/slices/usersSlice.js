import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
  name: "Slice",
  initialState: {
    isLoading: true,
    data: [],
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {});
    builder.addCase(fetchUsers.fulfilled, (state, action) => {});
    builder.addCase(fetchUsers.rejected, (state, action) => {});
  },
});

export const usersReducer = usersSlice.reducer;
