import videoFile from '../../public/video/VideoBack.mp4';

function VideoBackground() {
	return (
		<video autoPlay muted loop id="background-video">
			<source src={videoFile} type="video/mp4" />
		</video>
	);
}

export default VideoBackground;
