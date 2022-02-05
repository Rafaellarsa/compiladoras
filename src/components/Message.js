import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 1rem;
	align-items: center;
	justify-content: ${(props) => (props.isUser ? 'right' : 'left')};
`;

const Photo = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin: 0 1rem;
`;

const Message = ({ messageInfo }) => {
	return (
		<Container isUser={messageInfo.isUser}>
			{!messageInfo.isUser && (
				<Photo src={messageInfo.photo} alt={messageInfo.name} />
			)}
			<div>{messageInfo.text}</div>
			{messageInfo.isUser && (
				<Photo src={messageInfo.photo} alt={messageInfo.name} />
			)}
		</Container>
	);
};

export default Message;
