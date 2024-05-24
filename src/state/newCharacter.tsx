import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewCharacter {
	value: string;
}

const initialState: NewCharacter = {
	value: '',
};

const newCharacterSlice = createSlice({
	name: 'newCharacter',
	initialState,
	reducers: {
		handleNewCharacterChange: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { handleNewCharacterChange } = newCharacterSlice.actions;
export default newCharacterSlice.reducer;
