import styled from 'styled-components';

import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import WritingBar from './components/WritingBar';

const Container = styled.div`
	display: flex;
`;

function App() {
	return (
		<Container>
			<ContactList />
			<div>
				<Conversation />
				<WritingBar />
			</div>
		</Container>
	);
}

export default App;
