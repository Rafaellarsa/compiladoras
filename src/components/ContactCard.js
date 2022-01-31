import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	padding: 1rem;
	align-items: center;
	cursor: pointer;

	:hover {
		background-color: #edf5f9;
	}
`;

const Photo = styled.img`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	margin-right: 1rem;
`;

const ContactCard = ({ contact }) => {
	return (
		<Container>
			<Photo src={contact.photo} alt={contact.name} />
			<div>
				<b>{contact.name}</b> <br />
				{contact.lastMessage}
			</div>
		</Container>
	);
};

export default ContactCard;
