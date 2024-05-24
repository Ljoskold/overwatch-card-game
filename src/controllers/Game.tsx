import characters from '../data/characters.json';
import Card from '../components/Card';
import PopUp from '../components/PopUp';
import '../styles/UI.css';
import ScoreBoard from '../components/ScoreBoard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useEffect, useState } from 'react';
import { updatePopUpState } from '../state/popUpState';
import { resetPickedCharacter } from '../state/pickedCharacters';
import { setGameState } from '../state/gameState';
import { setFlipState } from '../state/flip';
import { setSelectedCards } from '../state/selectedCards';
import { setBestScore } from '../state/bestScore';
// import { setIsVictory } from '../state/isVictory';
import { AnimatePresence, motion } from 'framer-motion';

export default function Game(): React.ReactElement {
	const dispatch = useDispatch();
	const [isDefeat, setIsDefeat] = useState(false);
	const [isVictory, setIsVictory] = useState(false);

	const difficulty = useSelector(
		(state: RootState) => state.difficulty.value
	);
	const bestScore = useSelector((state: RootState) => state.bestScore.value);
	const pickedCharacters = useSelector(
		(state: RootState) => state.pickedCharacters.value
	);
	const popUpState = useSelector(
		(state: RootState) => state.popUpState.value
	);
	const selectedCards = useSelector(
		(state: RootState) => state.selectedCardsState.value
	);

	useEffect(() => {
		checkIsGameOver(pickedCharacters);
	}, [pickedCharacters]);

	const shuffle = (array: { name: string; img: string }[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	function updateBestScore(array: string[]) {
		const newScore = array.length - 1;
		if (bestScore < newScore) {
			dispatch(setBestScore(newScore));
		}
	}
	function resetGameStats(array: string[]) {
		dispatch(updatePopUpState(true));
		dispatch(resetPickedCharacter());
		updateBestScore(array);
	}
	function isAllValueUnique(array: string[]) {
		return new Set(array).size === array.length;
	}
	function checkIsGameOver(array: string[]) {
		if (array.length === 20) {
			setIsVictory(true);
			resetGameStats(array);
		} else if (!isAllValueUnique(array)) {
			setIsDefeat(true);
			resetGameStats(array);
		} else if (dispatch(setFlipState(true))) {
			if (selectedCards.length === 0) {
				dispatch(setSelectedCards(renderShuffledCards(characters)));
			} else {
				setTimeout(() => {
					dispatch(setSelectedCards(renderShuffledCards(characters)));
				}, 800);
			}
		}
	}
	function renderShuffledCards(array: { name: string; img: string }[]) {
		const shuffledArray = shuffle(array);

		let selected: { name: string; img: string }[] = [];
		if (difficulty === 'easy') {
			selected = shuffledArray.slice(0, 3);
		} else if (difficulty === 'medium') {
			selected = shuffledArray.slice(0, 5);
		} else if (difficulty === 'hard') {
			selected = shuffledArray.slice(0, 6);
		}

		const uniqueCard = array.find(
			(hero) => !pickedCharacters.includes(hero.name)
		);
		if (uniqueCard) {
			if (!selected.some((hero) => hero.name === uniqueCard.name)) {
				selected = [uniqueCard, ...selected.slice(1)];
			}
		}

		return selected;
	}

	return (
		<>
			<motion.img
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				src="ow-logo.png"
				className="logo game"
				onClick={() => {
					dispatch(setGameState(false));
					dispatch(setBestScore(0));
					setIsVictory(false);
					setIsDefeat(false);
					dispatch(resetPickedCharacter());
				}}
			></motion.img>
			<ScoreBoard />
			<AnimatePresence>
				{popUpState && (
					<PopUp
						isDefeat={isDefeat}
						setIsDefeat={setIsDefeat}
						isVictory={isVictory}
						setIsVictory={setIsVictory}
					/>
				)}
			</AnimatePresence>
			<div className="game-container">
				{selectedCards.map((hero, index) => (
					<Card key={index} hero={hero} />
				))}
			</div>
		</>
	);
}
