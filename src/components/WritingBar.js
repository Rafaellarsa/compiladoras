import styled from 'styled-components';

import sendIcon from '../assets/send-icon.png';

const Container = styled.div`
	width: 75vw;
	border-top: solid 1px #cccccc;
`;

const Button = styled.button`
	background-color: #29b6f6;
`;

const WritingBar = () => {
	return (
		<Container>
			<Button>
				<img src={sendIcon} alt='send message' />
			</Button>
		</Container>
	);
};

export default WritingBar;
