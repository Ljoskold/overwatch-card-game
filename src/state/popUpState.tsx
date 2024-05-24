import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PopUp {
	value: boolean;
}

const initialState: PopUp = {
	value: false,
};

const popUpSlice = createSlice({
	name: 'popUpState',
	initialState,
	reducers: {
		updatePopUpState: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { updatePopUpState } = popUpSlice.actions;
export default popUpSlice.reducer;
