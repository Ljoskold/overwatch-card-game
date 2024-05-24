import '../styles/RulesPopUp.css';
import { AnimatePresence, motion } from 'framer-motion';

interface RulesPopUpProps {
	isVisible: boolean;
}

export default function RulesPopUp({ isVisible }: RulesPopUpProps) {
	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 100 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5, height: 0 }}
					className="rules-pop-up"
				>
					<div className="rules-wrapper">
						<h3>Game rules:</h3>
						<ul className="rules-list">
							<li>Each round cards are shuffled.</li>
							<li>Choose a card and remember it</li>
							<li>
								<span>IMPORTANT:</span> NEVER CHOOSE THE SAME
								CARD TWICE
							</li>
							<li>Have fun!</li>
						</ul>
					</div>
					<img src="/winston-popup.png" alt="" />
				</motion.div>
			)}
		</AnimatePresence>
	);
}
