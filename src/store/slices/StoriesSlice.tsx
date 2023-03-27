import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Stories {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  image?: string;
}

const PLACE_HOLDER_API = 'https://fakestoreapi.com/products';

export const fetchStory = createAsyncThunk(
  'StoriesSlice/fetchStory',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get<Stories[]>(PLACE_HOLDER_API);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

interface StoryState {
  loading: boolean;
  error: string | null;
  data: Stories[] | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as StoryState;

const StoriesSlice = createSlice({
  initialState,
  name: 'StoriesSlice',
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchStory.pending, (state, action) => {
        const newState = { ...state };
        newState.loading = true;
      })
      .addCase(
        fetchStory.fulfilled,
        (state, action: PayloadAction<Stories[]>) => {
          const newState = { ...state };
          newState.loading = false;
          newState.data = action.payload;
        },
      )
      .addCase(fetchStory.rejected, (state, action: PayloadAction<any>) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = action.payload;
      });
  },
});

export default StoriesSlice.reducer;
