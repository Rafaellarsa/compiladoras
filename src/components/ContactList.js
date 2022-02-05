import styled from 'styled-components';

import contactList from '../data/contactList.json';

import ContactCard from './ContactCard';

const Container = styled.div`
	width: 25vw;
	height: 100vh;
	border-right: solid 1px #cccccc;

	@media only screen and (max-width: 768px) {
		display: ${(props) => (props.isInitialScreen ? 'block' : 'none')};
		width: ${(props) => (props.isInitialScreen ? '100%' : '0')};
	}
`;

const TopBar = styled.div`
	width: 100%;
	height: 5rem;
	border-bottom: solid 1px #cccccc;
`;

const ContactList = ({ selectedContactId, selectContact, isInitialScreen }) => {
	const cardsList = contactList.contacts.map((contact) => (
		<ContactCard
			key={contact.id}
			isSelected={selectedContactId == contact.id}
			contact={contact}
			selectContact={selectContact}
		/>
	));

	return (
		<Container isInitialScreen={isInitialScreen}>
			<TopBar />
			{cardsList}
		</Container>
	);
};

export default ContactList;
