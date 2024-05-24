import { ReactElement } from 'react';

interface DifficultyButtonsProps {
	value: string;
	text: string;
	onMouseEnter: () => void;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function DifficultyButton({
	value,
	text,
	onMouseEnter,
	onClick,
}: DifficultyButtonsProps): ReactElement {
	return (
		<button
			className="difficulty-button"
			value={value}
			onMouseEnter={onMouseEnter}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
