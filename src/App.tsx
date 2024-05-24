import './App.css';
import StartGame from './controllers/StartGame';
import Game from './controllers/Game';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import VideoBackground from './components/VideoBackground';
import Controlls from './components/Controlls';

function App() {
	const gameState = useSelector((state: RootState) => state.gameState.value);

	return (
		<>
			<VideoBackground />
			{gameState ? <Game /> : <StartGame />}
			<Controlls />
		</>
	);
}

export default App;
