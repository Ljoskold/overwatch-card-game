import { createSlice } from '@reduxjs/toolkit';

interface Muted {
	value: boolean;
}

const initialState: Muted = {
	value: false,
};

const mutedSlice = createSlice({
	name: 'muted',
	initialState,
	reducers: {
		setMuted: (state) => {
			state.value = !state.value;
		},
	},
});

export const { setMuted } = mutedSlice.actions;
export default mutedSlice.reducer;
