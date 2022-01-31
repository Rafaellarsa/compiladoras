import styled from 'styled-components';

import ContactCard from './ContactCard';
import contactList from '../data/contactList.json';

const Container = styled.div`
	width: 25vw;
	height: 100vh;
	border-right: solid 1px #cccccc;
`;

const TopBar = styled.div`
	width: 100%;
	height: 5rem;
	border-bottom: solid 1px #cccccc;
`;

const ContactList = () => {
	const cardsList = contactList.contacts.map((contact) => (
		<ContactCard contact={contact} />
	));

	return (
		<Container>
			<TopBar />
			{cardsList}
		</Container>
	);
};

export default ContactList;
