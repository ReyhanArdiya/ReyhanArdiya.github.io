import ContactsForm from "./ContactsForm.js";
import ContactsLinks from "./ContactsLinks.js";
import Subtitle from "../../common/Text/Subtitle.js";
import styled from "styled-components";

const ContactsContainer = styled.section`
    grid-area: contacts;
    width: 100%;
`;

const ContactsIntro = styled(Subtitle)`
    text-align: left;
    margin-left: 2em;
    margin-bottom: 1.85em;
`;

const ContactsContent = styled.section`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "form links";
    grid-template-columns: 0.58fr 0.42fr;
`;

const Contacts = () => {
	return (
		<ContactsContainer id="contacts">
			<ContactsIntro>If you want to contact me...</ContactsIntro>
			<ContactsContent>
				<ContactsForm />
				<ContactsLinks />
			</ContactsContent>
		</ContactsContainer>
	);
};

export default Contacts;