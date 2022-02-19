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
    background-color: red;
    height: 100%;
`;

const Contacts = ({ propsDestruct }) => {
	return (
		<ContactsContainer id="contacts">
			<ContactsIntro>If you want to contact me...</ContactsIntro>
			<ContactsContent>

			</ContactsContent>
		</ContactsContainer>
	);
};

export default Contacts;