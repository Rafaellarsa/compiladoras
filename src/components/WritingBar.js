import { useState } from 'react';
import styled from 'styled-components';

import sendIcon from '../assets/send-icon.png';

const Container = styled.div`
	width: 75vw;
	height: 10vh;
	box-sizing: border-box;
	border-top: solid 1px #cccccc;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		display: ${(props) => (props.isInitialScreen ? 'none' : 'flex')};
		width: ${(props) => (props.isInitialScreen ? '0' : '100%')};
	}
`;

const Input = styled.input`
	box-sizing: border-box;
	height: 2.5rem;
	width: 70%;
	background-color: #edf5f9;
	border: none;
`;

const Button = styled.button`
	background-color: #29b6f6;
	box-sizing: border-box;
	height: 2.5rem;
	width: 2.5rem;
	margin-left: 1rem;
	border: none;
`;

const WritingBar = ({ isInitialScreen, sendMessage }) => {
	const [input, setInput] = useState('');

	const handleClick = () => {
		sendMessage(input);
		setInput('');
	};

	return (
		<Container isInitialScreen={isInitialScreen}>
			<Input
				value={input}
				onInput={(e) => setInput(e.target.value)}
				aria-label='new message'
			/>
			<Button onClick={handleClick}>
				<img src={sendIcon} alt='send message' />
			</Button>
		</Container>
	);
};

export default WritingBar;
