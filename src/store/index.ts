
import { configureStore, createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { getGoods } from "../api/api";

const initialState: State = {
  goods: [],
  loading: true,
  query: '',
  isPriceLess: false,
  isRatefull: false
};

export const setGoods = createAsyncThunk<Good[]>('SET_GOODS', async () => {
  const finalGoods = await getGoods();

  return finalGoods;
});

export const setPriceLess = createAction<boolean>('SET_PRICE');

export const setRateFull = createAction<boolean>('SET_RATE');

export const setQuery = createAction<string>('SET_QUERY');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setGoods.fulfilled, (state, action) => {
    
    state.goods = action.payload;
    state.loading = false;
  });

  builder.addCase(setGoods.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(setQuery, (state, action) => {
    state.query = action.payload;
  });

  builder.addCase(setPriceLess, (state, action) => {
    state.isPriceLess = action.payload;
  });

  builder.addCase(setRateFull, (state, action) => {
    state.isRatefull = action.payload;
  })
});

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;

