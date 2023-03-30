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
  map(arg0: (product: any) => JSX.Element): import('react').ReactNode;

  data: Stories[] | null;
}

const initialState = {
  data: null,
} as StoryState;

const StoriesSlice = createSlice({
  initialState,
  name: 'StoriesSlice',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchStory.fulfilled,
      (state, action: PayloadAction<Stories[]>) => {
        const newState = { ...state };

        newState.data = action.payload;
      },
    );
  },
});

export default StoriesSlice.reducer;
