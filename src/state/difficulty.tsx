import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface DifficultyState {
	value: string;
}

const initialState: DifficultyState = {
	value: 'easy',
};

const difficultySlice = createSlice({
	name: 'difficulty',
	initialState,
	reducers: {
		update: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { update } = difficultySlice.actions;
export default difficultySlice.reducer;
