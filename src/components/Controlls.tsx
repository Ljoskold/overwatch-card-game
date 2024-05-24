import { useDispatch, useSelector } from 'react-redux';
import '../styles/Controlls.css';
import { RootState } from '../state/store';
import { setMuted } from '../state/muted';
import { useEffect, useRef, useState } from 'react';
import RulesPopUp from './RulesPopUp';
import backGroundAudio from '/audio/background-audio.mp3';

export default function Controlls() {
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState(false);
	const [isAmbient, setIsAmbient] = useState(false);
	const ambientMusicRef = useRef<HTMLAudioElement | null>(null);

	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const toggleIsAmbient = () => {
		setIsAmbient(!isAmbient);
	};

	useEffect(() => {
		if (!ambientMusicRef.current) {
			ambientMusicRef.current = new Audio(backGroundAudio);
			ambientMusicRef.current.volume = 0.3;
			ambientMusicRef.current.loop = true;
		}
	}, []);

	useEffect(() => {
		if (ambientMusicRef.current) {
			if (isAmbient) {
				ambientMusicRef.current.play();
			} else {
				ambientMusicRef.current.pause();
			}
		}
	}, [isAmbient]);

	const muted = useSelector((state: RootState) => state.muted.value);
	return (
		<div className="controlls">
			<RulesPopUp isVisible={isVisible} />
			<div className="controlls-buttons-wrapper">
				<button
					id="music-button"
					style={{
						backgroundImage: `url(${
							isAmbient ? '/music.svg' : '/no-music.svg'
						})`,
					}}
					onClick={toggleIsAmbient}
				></button>
				<button
					id="sound-button"
					style={{
						backgroundImage: `url(${
							muted ? '/sound-off.svg' : '/sound-on.svg'
						})`,
					}}
					onClick={() => dispatch(setMuted())}
				></button>
				<button
					className={`info-button ${isVisible ? 'active' : ''}`}
					onClick={toggleVisibility}
				></button>
			</div>
		</div>
	);
}
