import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface OptionState {
  grid: boolean;
  chart: boolean;
}

const initialState: OptionState = {
  grid: true,
  chart: true,
};

export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    toggleGridState: ({ grid }) => {
      grid = !grid;
    },
    toggleChartState: ({ chart }) => {
      chart = !chart;
    },
  },
});

export const { toggleGridState, toggleChartState } = optionSlice.actions;

export const selectOption = (state: RootState) => state.option;

export default optionSlice.reducer;
