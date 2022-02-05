import styled from 'styled-components';

import Message from './Message';
import Arrow from '../assets/arrow-left.png';

const Container = styled.div`
	background-color: #edf5f9;
	width: 75vw;
	height: 90vh;

	@media only screen and (max-width: 768px) {
		display: ${(props) => (props.isInitialScreen ? 'none' : 'block')};
		width: ${(props) => (props.isInitialScreen ? '0' : '100%')};
	}
`;

const TopBar = styled.div`
	width: 100%;
	height: 5rem;
	background-color: #ffffff;
	border-bottom: solid 1px #cccccc;
	display: flex;
	align-items: center;
`;

const ReturnButton = styled.button`
	display: none;

	@media only screen and (max-width: 768px) {
		display: block;
		margin-left: 1rem;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}
`;

const Photo = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin: 0 1rem;
`;

const Conversation = ({
	conversation,
	isInitialScreen,
	setIsInitialScreen,
}) => {
	const messagesList = conversation.messages.map((message, index) => {
		const messageInfo = {
			isUser: message.author == '00',
			name:
				message.author == '00'
					? conversation.user.name
					: conversation.contact.name,
			photo:
				message.author == '00'
					? conversation.user.photo
					: conversation.contact.photo,
			text: message.message,
		};

		return <Message key={index} messageInfo={messageInfo} />;
	});

	return (
		<Container isInitialScreen={isInitialScreen}>
			<TopBar>
				<ReturnButton onClick={() => setIsInitialScreen(true)}>
					<img src={Arrow} alt='return' />
				</ReturnButton>
				<Photo
					src={conversation.contact.photo}
					alt={conversation.contact.name}
				/>
				{conversation.contact.name}
			</TopBar>
			{messagesList}
		</Container>
	);
};

export default Conversation;
