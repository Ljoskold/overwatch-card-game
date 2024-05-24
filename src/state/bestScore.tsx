import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface BestScore {
	value: number;
}
const initialState: BestScore = {
	value: 0,
};

const bestScoreSlice = createSlice({
	name: 'bestScore',
	initialState,
	reducers: {
		setBestScore: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
		resetBestScore: (state) => {
			state.value = 0;
		},
	},
});
export const { setBestScore, resetBestScore } = bestScoreSlice.actions;
export default bestScoreSlice.reducer;
