import { RootState } from '../state/store';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { easeIn } from 'framer-motion/dom';

export default function ScoreBoard() {
	const pickedCharacters = useSelector(
		(state: RootState) => state.pickedCharacters.value
	);
	const bestScore = useSelector((state: RootState) => state.bestScore.value);

	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 1, ease: easeIn }}
			className="score-board"
		>
			<div className="score-wrapper">
				<span>Current score:</span>
				<span className="current-score-value">{`${pickedCharacters.length} / 20`}</span>
			</div>
			<div className="score-wrapper">
				<span>Best score:</span>
				<span className="best-score-value">{`${bestScore}`}</span>
			</div>
		</motion.div>
	);
}
