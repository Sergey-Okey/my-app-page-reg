import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useValidator } from 'simple-react-validator';
import Input from './Input';
import Button from './Button';

interface FormData {
	login: string;
	email: string;
	password: string;
}

const RegistrationPage: React.FC = () => {
	const history = useHistory();
	const [formData, setFormData] = useState<FormData>({ login: '', email: '', password: '' });
	const [error, setError] = useState<string | null>(null);

	const validator = useValidator();

	useEffect(() => {
		if (validator?.allValid()) {
			setError(null);
		}
	}, [validator]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async () => {
		try {
		} catch (error) {
			console.error('Error during registration:', error);
		}
	};

	return (
		<div>
			<h2>Registration Page</h2>
			<Input
				type="text"
				name="login"
				placeholder="Login"
				value={formData.login}
				onChange={handleInputChange}
				onBlur={() => validator.showMessageFor('login')}
				validator={validator}
				required
			/>
			<Input
				type="text"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleInputChange}
				onBlur={() => validator.showMessageFor('email')}
				validator={validator}
				required
				email
			/>
			<Input
				type="password"
				name="password"
				placeholder="Password"
				value={formData.password}
				onChange={handleInputChange}
				onBlur={() => validator.showMessageFor('password')}
				validator={validator}
				required
				minLength={8}
			/>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<Button
				disabled={!validator.allValid()}
				onClick={handleSubmit}
				text="Register"
			/>
		</div>
	);
};

export default RegistrationPage;
