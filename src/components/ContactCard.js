import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 1rem;
	align-items: center;
	cursor: pointer;

	@media only screen and (min-width: 768px) {
		background-color: ${(props) =>
			props.isSelected ? '#29b6f6' : 'transparent'};

		:hover {
			background-color: ${(props) =>
				props.isSelected ? '#29b6f6' : '#edf5f9'};
		}
	}
`;

const Photo = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin-right: 1rem;
`;

const ContactCard = ({ isSelected, contact, selectContact }) => {
	return (
		<Container
			isSelected={isSelected}
			onClick={() => selectContact(contact.id)}
		>
			<Photo src={contact.photo} alt={contact.name} />
			<div>
				<b>{contact.name}</b> <br />
				{contact.lastMessage}
			</div>
		</Container>
	);
};

export default ContactCard;
