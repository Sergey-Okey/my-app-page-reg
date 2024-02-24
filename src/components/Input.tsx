import React from 'react';

interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: () => void;
	validator?: any;
	required?: boolean;
	email?: boolean;
	minLength?: number;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange, onBlur, validator, required, email, minLength }) => {
	return (
		<div>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{validator?.message(name, value, required, email, minLength)}
		</div>
	);
};

export default Input;
