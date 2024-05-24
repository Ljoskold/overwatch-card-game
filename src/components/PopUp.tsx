import '../styles/PopUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { updatePopUpState } from '../state/popUpState';
import { setGameState } from '../state/gameState';
import { RootState } from '../state/store';
import { motion } from 'framer-motion';
import hoverClickAudio from '/audio/hover_click.mp3';
import { useEffect, useRef } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface PopUpProps {
	isDefeat: boolean;
	setIsDefeat: Dispatch<SetStateAction<boolean>>;
	isVictory: boolean;
	setIsVictory: Dispatch<SetStateAction<boolean>>;
}

export default function PopUp({
	isDefeat,
	setIsDefeat,
	isVictory,
	setIsVictory,
}: PopUpProps) {
	const dispatch = useDispatch();
	const muted = useSelector((state: RootState) => state.muted.value);

	const hoverClickRef = useRef(new Audio(hoverClickAudio));

	useEffect(() => {
		const hoverClick = hoverClickRef.current;
		hoverClick.volume = muted ? 0 : 0.05;
	}, [muted]);

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.5 }}
				className={`popUp`}
			>
				{isVictory && (
					<>
						<video
							autoPlay
							muted={muted}
							className={`pop-up-backround-video`}
						>
							<source src="video/victory.mp4" type="video/mp4" />
						</video>{' '}
					</>
				)}
				{isDefeat && (
					<>
						<video
							autoPlay
							muted={muted}
							className="pop-up-backround-video"
						>
							<source src="video/defeat.mp4" type="video/mp4" />
						</video>{' '}
					</>
				)}
				<div className="pop-up-buttons">
					<button
						onMouseEnter={() => {
							hoverClickRef.current.play();
						}}
						onClick={() => {
							dispatch(updatePopUpState(false));
							setIsVictory(false);
							setIsDefeat(false);
						}}
					>
						Play again
					</button>
					<button
						onMouseEnter={() => {
							hoverClickRef.current.play();
						}}
						onClick={() => {
							dispatch(setGameState(false));
							dispatch(updatePopUpState(false));
							setIsVictory(false);
							setIsDefeat(false);
						}}
					>
						Change difficulty
					</button>
				</div>
			</motion.div>
		</>
	);
}
