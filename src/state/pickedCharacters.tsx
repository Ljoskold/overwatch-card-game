import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface PickedCharacters {
	value: string[];
}
const initialState: PickedCharacters = {
	value: [],
};

const pickedCharactersSlice = createSlice({
	name: 'pickedCharacters',
	initialState,
	reducers: {
		addNewPickedCharacter: (state, action: PayloadAction<string>) => {
			state.value = [...state.value, action.payload];
		},
		resetPickedCharacter: (state) => {
			state.value = [];
		},
	},
});
export const { addNewPickedCharacter, resetPickedCharacter } =
	pickedCharactersSlice.actions;
export default pickedCharactersSlice.reducer;
