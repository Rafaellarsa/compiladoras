import styled from 'styled-components';

// import Message from './Message';

const Container = styled.div`
	background-color: #edf5f9;
	width: 75vw;
	height: 90vh;
`;

const TopBar = styled.div`
	width: 100%;
	height: 5rem;
	background-color: #ffffff;
	border-bottom: solid 1px #cccccc;
`;

const Conversation = () => {
	return (
		<Container>
			<TopBar />
			{/* <Message /> */}
		</Container>
	);
};

export default Conversation;
