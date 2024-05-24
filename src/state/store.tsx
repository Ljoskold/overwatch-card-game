import { configureStore } from '@reduxjs/toolkit';
import difficultyReducer from './difficulty';
import pickedCharactersReducer from './pickedCharacters';
import newCharacterReducer from './newCharacter';
import popUpStateReducer from './popUpState';
import gameStateReducer from './gameState';
import flipStateReducer from './flip';
import selectedCardsReducer from './selectedCards';
import bestScoreReducer from './bestScore';
import mutedReducer from './muted';

export const store = configureStore({
	reducer: {
		difficulty: difficultyReducer,
		pickedCharacters: pickedCharactersReducer,
		newCharacter: newCharacterReducer,
		popUpState: popUpStateReducer,
		gameState: gameStateReducer,
		flipState: flipStateReducer,
		selectedCardsState: selectedCardsReducer,
		bestScore: bestScoreReducer,
		muted: mutedReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
