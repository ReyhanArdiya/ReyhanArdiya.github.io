import ContactsForm from "./ContactsForm.js";
import ContactsLinks from "./ContactsLinks.js";
import Subtitle from "../../common/Text/Subtitle.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ContactsContainer = styled.section`
    grid-area: contacts;
    width: 100%;
    transition: all 0.4s ease-in;
	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
	opacity: ${({ visible }) => visible ? "1" : "0"};
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

let isAnimated = false;
const Contacts = () => {
	const { ref, inView } = useInView({
		root      : null,
		threshold : 0.1
	});

	if (inView) {
		isAnimated = true;
	}

	return (
		<ContactsContainer id="contacts" ref={ref} visible={isAnimated}>
			<ContactsIntro>If you want to contact me...</ContactsIntro>
			<ContactsContent>
				<ContactsForm />
				<ContactsLinks />
			</ContactsContent>
		</ContactsContainer>
	);
};

export default Contacts;