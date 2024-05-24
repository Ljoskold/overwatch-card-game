import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
	value: boolean;
}
const initialState: GameState = {
	value: false,
};

const gameStateSlice = createSlice({
	name: 'gameState',
	initialState,
	reducers: {
		setGameState: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { setGameState } = gameStateSlice.actions;
export default gameStateSlice.reducer;
