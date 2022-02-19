import Subtitle from "../../common/Text/Subtitle.js";
import styled from "styled-components";

const ContactsContainer = styled.section`
    grid-area: contacts;
    width: 100%;
    height: 200px;
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

const ContactsForm = styled.form`
    grid-area: form;
    background: var(--color-primary-1);
`;

const ContactsLinks = styled.section`
    grid-area: links;
    background: var(--color-primary-2);
`;

const Contacts = ({ propsDestruct }) => {
	return (
		<ContactsContainer id="contacts">
			<ContactsIntro>If you want to contact me...</ContactsIntro>
			<ContactsContent>
				<ContactsForm></ContactsForm>
				<ContactsLinks></ContactsLinks>
			</ContactsContent>
		</ContactsContainer>
	);
};

export default Contacts;