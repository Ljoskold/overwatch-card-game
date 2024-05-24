import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlipState {
	value: boolean;
}
const initialState: FlipState = {
	value: false,
};

const flipStateSlice = createSlice({
	name: 'flipState',
	initialState,
	reducers: {
		setFlipState: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { setFlipState } = flipStateSlice.actions;
export default flipStateSlice.reducer;
