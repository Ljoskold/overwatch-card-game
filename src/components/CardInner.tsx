import React from 'react';

interface CardInnerProps {
	hero: { name: string; img: string };
	flipState: boolean;
}

export default function CardInner({
	hero,
	flipState,
}: CardInnerProps): React.ReactElement {
	return (
		<div className={`card-inner ${flipState ? 'is-flipped' : ''}`}>
			<div className="card-front">
				<img className="card-img" src={hero.img} alt={hero.name} />
				<div className="card-name">
					<h2>{hero.name}</h2>
				</div>
			</div>
			<div className="card-back">
				<img
					className="card-back-image"
					src="card-back-image.png"
					alt="Card back image"
				/>
			</div>
		</div>
	);
}
