import PropTypes from "prop-types";
import Subtitle from "../../common/Text/Subtitle.js";
import Title from "../../common/Text/Title.js";
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

const ContactsForm = styled.form`
    grid-area: form;
    background: var(--color-primary-1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ContactsFormControlContainer = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 0.065em;
    width: 90%;

    & label {
        text-align: left;
    }
`;

const ContactsInput = styled.input`
    background-color: var(--color-accent-1);
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 0.25em 0.5em;
    font: 0.45em "Archivo Narrow";
`;

const ContactsFormControl = ({ children: labelTitle, type, name }) => {
	return (
		<ContactsFormControlContainer>
			<Subtitle as="label" htmlFor={name}>{labelTitle}</Subtitle>
			<ContactsInput type="text" id={name}/>
		</ContactsFormControlContainer>
	);
};

ContactsFormControl.propTypes = {
	children : PropTypes.string.isRequired,
	name     : PropTypes.string.isRequired,
	type     : PropTypes.string.isRequired,
};

const SubmitButt = styled(Title).attrs({ as : "button" })`
    background: var(--color-primary-2);
    color: var(--color-accent-1);
    border: none;
    outline: none;
    padding: 0;
    border-radius: 5px;
    text-align: center;
    padding: 0.25em 0.4em;
    padding-right: 0.1em;
`;

const ContactsLinks = styled.section`
    grid-area: links;
    background: var(--color-primary-2);
`;

const Contacts = () => {
	return (
		<ContactsContainer id="contacts">
			<ContactsIntro>If you want to contact me...</ContactsIntro>
			<ContactsContent>
				<ContactsForm>
					<ContactsFormControl type="text" name="name">Name</ContactsFormControl>
					<ContactsFormControl type="text" name="email">Email</ContactsFormControl>
					<ContactsFormControl type="text" name="mEssage">Message</ContactsFormControl>
					<SubmitButt>SEND</SubmitButt>
				</ContactsForm>
				<ContactsLinks></ContactsLinks>
			</ContactsContent>
		</ContactsContainer>
	);
};

export default Contacts;