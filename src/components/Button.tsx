import React from 'react';

interface ButtonProps {
	text: string;
	disabled: boolean;
	onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {
	return (
		<button onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

export default Button;
