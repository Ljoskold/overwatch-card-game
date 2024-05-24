import React from 'react';
import { useEffect, useRef } from 'react';
import '../styles/Card.css';
import { RootState } from '../state/store';
import { addNewPickedCharacter } from '../state/pickedCharacters';
import { useDispatch, useSelector } from 'react-redux';
import { handleNewCharacterChange } from '../state/newCharacter';
import { setFlipState } from '../state/flip';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import cardFlipSound from '../../public/audio/cardFlip.mp3';
import CardInner from './CardInner';

interface Hero {
	name: string;
	img: string;
}

interface CardProps {
	hero: Hero;
}
export default function Card({ hero }: CardProps): React.ReactElement {
	const dispatch = useDispatch();
	const flipState = useSelector((state: RootState) => state.flipState.value);
	const muted = useSelector((state: RootState) => state.muted.value);
	const newCharacter = useSelector(
		(state: RootState) => state.newCharacter.value
	);

	const flipSoundRef = useRef<HTMLAudioElement | null>(null);

	function nameHero(heroName: string) {
		dispatch(addNewPickedCharacter(heroName));
		if (newCharacter === '') {
			dispatch(handleNewCharacterChange('first round'));
		} else {
			dispatch(handleNewCharacterChange(heroName));
		}
	}

	useEffect(() => {
		flipSoundRef.current = new Audio(cardFlipSound);
		flipSoundRef.current.volume = muted ? 0 : 0.11;
	}, []);

	useEffect(() => {
		if (flipState) {
			setTimeout(() => dispatch(setFlipState(false)), 1000);
		}
	}, [flipState]);

	useEffect(() => {
		if (flipSoundRef.current) {
			flipSoundRef.current.volume = muted ? 0 : 0.11;
		}
	}, [muted]);

	return (
		<Tilt
			glareEnable={true}
			glareMaxOpacity={0.3}
			glareColor="#ffffff"
			glarePosition="bottom"
			glareBorderRadius="15px"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2 }}
				className="card"
				data-name={hero.name}
				onClick={() => {
					nameHero(hero.name);
					if (flipSoundRef.current) {
						flipSoundRef.current.play();
					}
				}}
			>
				<CardInner hero={hero} flipState={flipState} />
			</motion.div>
		</Tilt>
	);
}
