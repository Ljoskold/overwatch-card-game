import '../styles/StartGame.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useEffect } from 'react';
import { update } from '../state/difficulty';
import { setGameState } from '../state/gameState';
import { setBestScore } from '../state/bestScore';
import hoverClickAudio from '/audio/hover_click.mp3';
import DifficultyButton from '../components/DifficultyButton';

export default function StartGame(): React.ReactElement {
	const DIFF_BUTTONS_COUNT = ['easy', 'medium', 'hard'];
	const dispatch = useDispatch();
	const muted = useSelector((state: RootState) => state.muted.value);
	const hoverClick = new Audio(hoverClickAudio);
	hoverClick.volume = 0.05;

	function handleDifficultyChange(e: React.MouseEvent<HTMLButtonElement>) {
		const newDifficulty = e.currentTarget.value;
		dispatch(update(newDifficulty));
		dispatch(setBestScore(0));
	}

	useEffect(() => {
		if (muted) {
			hoverClick.volume = 0;
		} else {
			hoverClick.volume = 0.05;
		}
	}, [muted]);

	return (
		<>
			<div className="start-game-container">
				<img src="ow-logo.png" className="logo"></img>
				<h1 className="memory-card-game-logo">Memory Card Game</h1>
				<div className="difficulty-buttons">
					{DIFF_BUTTONS_COUNT.map((difficulty) => (
						<DifficultyButton
							key={difficulty}
							value={difficulty}
							text={difficulty}
							onMouseEnter={() => hoverClick.play()}
							onClick={(e) => {
								handleDifficultyChange(e),
									dispatch(setGameState(true));
							}}
						/>
					))}
				</div>
			</div>
		</>
	);
}
