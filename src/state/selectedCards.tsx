import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SelectedCardsState {
	value: { name: string; img: string }[];
}

const initialState: SelectedCardsState = {
	value: [],
};

const selectedCardsSlice = createSlice({
	name: 'selectedCards',
	initialState,
	reducers: {
		setSelectedCards: (
			state,
			action: PayloadAction<{ name: string; img: string }[]>
		) => {
			state.value = action.payload;
		},
	},
});

export const { setSelectedCards } = selectedCardsSlice.actions;
export default selectedCardsSlice.reducer;
