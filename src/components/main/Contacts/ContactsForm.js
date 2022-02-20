import BGText from "../../common/BGText/BGText.js";
import PropTypes from "prop-types";
import Subtitle from "../../common/Text/Subtitle.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";

const ContactsFormContainer = styled.form`
    grid-area: form;
    background: var(--color-primary-1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.25em 0;
    position: relative;
    overflow: hidden;

    *:not(.BGT) {
        z-index: 2;
    }
`;

const ContactsBGT = styled(BGText)`
    position: absolute;
    z-index: 1;
	writing-mode: vertical-rl;
    transform: rotate(180deg);
    left: 0;
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
    border-radius: 0.35em;
    padding: 0.25em 0.5em;
    font: 0.45em "Archivo Narrow";
`;

const ContactsTextArea = styled(ContactsInput).attrs({ as : "textarea" })`
    resize: none;
`;

const ContactsFormControl = ({ children: labelTitle, type, name }) => {
	const Input = type !== "textarea" ?
		<ContactsInput type="text" id={name} /> :
		<ContactsTextArea rows={6} id={name} />;

	return (
		<ContactsFormControlContainer>
			<Subtitle as="label" htmlFor={name}>{labelTitle}</Subtitle>
			{Input}
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
    border-radius: 0.35em;
    text-align: center;
    padding: 0.25em 0.4em;
    padding-right: 0.1em;
    font-size: 0.5em;
`;

const ContactsForm = () => {
	return (
		<ContactsFormContainer>
			<ContactsBGT rows={2} cols={7} text="MESSAGE" />
			<ContactsFormControl type="text" name="name">Name</ContactsFormControl>
			<ContactsFormControl type="text" name="email">Email</ContactsFormControl>
			<ContactsFormControl type="textarea" name="mEssage">Message</ContactsFormControl>
			<SubmitButt>SEND</SubmitButt>
		</ContactsFormContainer>

	);
};

export default ContactsForm;