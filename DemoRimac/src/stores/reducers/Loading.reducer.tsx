import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoading } from "./interfaces";


const initialState: ILoading = {
  loading: false,
  title: "",

};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    onSetLoading: (state, action: PayloadAction<{loading: boolean, title: string }>) => {
      state.loading = action.payload.loading;
      state.title = action.payload.title;
    },
  },
});

export const { onSetLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
