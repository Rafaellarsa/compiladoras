import { useEffect, useState } from 'react';
import styled from 'styled-components';

import conversation01 from './data/conversations/01.json';
import conversation02 from './data/conversations/02.json';
import conversation03 from './data/conversations/03.json';

import ContactList from './components/ContactList';
import Conversation from './components/Conversation';
import WritingBar from './components/WritingBar';

const Container = styled.div`
	display: flex;
`;

function App() {
	const [selectedContactId, setSelectedContactId] = useState('01');
	const [isInitialScreen, setIsInitialScreen] = useState(true);
	const [conversation, setConversation] = useState(conversation01);

	useEffect(() => {
		if (selectedContactId == '01') {
			setConversation(conversation01);
		} else if (selectedContactId == '02') {
			setConversation(conversation02);
		} else if (selectedContactId == '03') {
			setConversation(conversation03);
		}
	}, [selectedContactId]);

	const selectContact = (contactId) => {
		setSelectedContactId(contactId);
		setIsInitialScreen(false);
	};

	const sendMessage = (newMessage) => {
		let newConversation = { ...conversation };
		newConversation.messages.push({
			author: '00',
			message: newMessage,
		});
		setConversation(newConversation);
	};

	return (
		<Container>
			<ContactList
				selectedContactId={selectedContactId}
				selectContact={selectContact}
				isInitialScreen={isInitialScreen}
			/>
			<div>
				<Conversation
					conversation={conversation}
					isInitialScreen={isInitialScreen}
					setIsInitialScreen={setIsInitialScreen}
				/>
				<WritingBar
					sendMessage={sendMessage}
					isInitialScreen={isInitialScreen}
				/>
			</div>
		</Container>
	);
}

export default App;
