import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 1rem;
	align-items: center;
	/* cursor: pointer; */

	:hover {
		background-color: #edf5f9;
	}
`;

const Photo = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin: 0 1rem;
`;

const Message = ({ message }) => {
	return (
		<Container>
			<Photo src={message.photo} alt={message.name} />
			<div>{message.text}</div>
		</Container>
	);
};

export default Message;
