import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "Slice",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
