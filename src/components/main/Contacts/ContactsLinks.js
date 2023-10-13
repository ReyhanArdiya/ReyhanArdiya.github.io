import BGText from "../../common/BGText/BGText.js";
import ContactsList from "./ContactsList.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";

const Container = styled.section`
    grid-area: links;
    background: var(--color-primary-2);
    display: grid;
    grid-template-areas:
        "list"
        "button";
    grid-template-rows: 1fr 1fr;
    position: relative;
    overflow: hidden;

    #button-home {
        justify-self: center;
        align-self: center;
        cursor: pointer;
		width: 2em;
		height: 2em;
    }
`;

const contacts = [
	{
		link : "https://github.com/ReyhanArdiya",
		svg  : <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.71245 0 -4.57764e-05 6.7125 -4.57764e-05 15C-4.57764e-05 21.6375 4.2937 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2687 26.9812 11.2687 25.725C7.49995 26.4187 6.52495 24.8063 6.22495 23.9625C6.0562 23.5313 5.32495 22.2 4.68745 21.8438C4.16245 21.5625 3.41245 20.8688 4.6687 20.85C5.84995 20.8313 6.6937 21.9375 6.97495 22.3875C8.32495 24.6562 10.4812 24.0187 11.3437 23.625C11.475 22.65 11.8687 21.9938 12.3 21.6188C8.96245 21.2438 5.47495 19.95 5.47495 14.2125C5.47495 12.5812 6.0562 11.2313 7.01245 10.1813C6.86245 9.80625 6.33745 8.26875 7.16245 6.20625C7.16245 6.20625 8.4187 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0187 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0937 21.2438 17.7562 21.6188C18.3 22.0875 18.7687 22.9875 18.7687 24.3937C18.7687 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.7589 28.2259 25.3464 26.3121 27.1795 23.7592C29.0126 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z" fill="#EE2B47"/>
		</svg>,
		text : "ReyhanArdiya",
	},
	{
		link : "mailto:mreyhanapwsw@gmail.com",
		svg  : <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M23 0H2.99995C1.62495 0 0.512454 1.125 0.512454 2.5L0.499954 17.5C0.499954 18.875 1.62495 20 2.99995 20H23C24.375 20 25.5 18.875 25.5 17.5V2.5C25.5 1.125 24.375 0 23 0ZM22.5 5.3125L13.6625 10.8375C13.2625 11.0875 12.7375 11.0875 12.3375 10.8375L3.49995 5.3125C3.37461 5.24214 3.26485 5.14708 3.17731 5.03307C3.08978 4.91906 3.02628 4.78847 2.99067 4.64921C2.95506 4.50995 2.94808 4.36492 2.97015 4.22288C2.99222 4.08085 3.04287 3.94477 3.11906 3.82288C3.19524 3.70099 3.29536 3.59582 3.41336 3.51374C3.53136 3.43167 3.66479 3.37439 3.80557 3.34537C3.94635 3.31636 4.09156 3.31621 4.2324 3.34494C4.37324 3.37366 4.50678 3.43067 4.62495 3.5125L13 8.75L21.375 3.5125C21.4931 3.43067 21.6267 3.37366 21.7675 3.34494C21.9084 3.31621 22.0536 3.31636 22.1943 3.34537C22.3351 3.37439 22.4685 3.43167 22.5865 3.51374C22.7045 3.59582 22.8047 3.70099 22.8809 3.82288C22.957 3.94477 23.0077 4.08085 23.0298 4.22288C23.0518 4.36492 23.0448 4.50995 23.0092 4.64921C22.9736 4.78847 22.9101 4.91906 22.8226 5.03307C22.7351 5.14708 22.6253 5.24214 22.5 5.3125V5.3125Z" fill="#EE2B47"/>
		</svg>,
		text : "mreyhanapwsw@gmail.com",
	},
	{
		link : "https://www.instagram.com/reyhan_roze/",
		svg  : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12 8.09474C9.84958 8.09474 8.0947 9.84962 8.0947 12C8.0947 14.1504 9.84958 15.9053 12 15.9053C14.1504 15.9053 15.9052 14.1504 15.9052 12C15.9052 9.84962 14.1504 8.09474 12 8.09474ZM23.7129 12C23.7129 10.3828 23.7275 8.78029 23.6367 7.16603C23.5459 5.29103 23.1181 3.62697 21.747 2.25588C20.373 0.881853 18.7119 0.457048 16.8369 0.366228C15.2197 0.275408 13.6172 0.290056 12.0029 0.290056C10.3857 0.290056 8.78317 0.275408 7.16892 0.366228C5.29392 0.457048 3.62985 0.884782 2.25876 2.25588C0.884737 3.6299 0.459932 5.29103 0.369112 7.16603C0.278291 8.78322 0.29294 10.3858 0.29294 12C0.29294 13.6143 0.278291 15.2197 0.369112 16.834C0.459932 18.709 0.887667 20.3731 2.25876 21.7442C3.63278 23.1182 5.29392 23.543 7.16892 23.6338C8.7861 23.7246 10.3886 23.71 12.0029 23.71C13.6201 23.71 15.2226 23.7246 16.8369 23.6338C18.7119 23.543 20.3759 23.1152 21.747 21.7442C23.1211 20.3701 23.5459 18.709 23.6367 16.834C23.7304 15.2197 23.7129 13.6172 23.7129 12V12ZM12 18.0088C8.67478 18.0088 5.99118 15.3252 5.99118 12C5.99118 8.67482 8.67478 5.99123 12 5.99123C15.3252 5.99123 18.0088 8.67482 18.0088 12C18.0088 15.3252 15.3252 18.0088 12 18.0088ZM18.2549 7.14845C17.4785 7.14845 16.8515 6.5215 16.8515 5.74513C16.8515 4.96877 17.4785 4.34181 18.2549 4.34181C19.0312 4.34181 19.6582 4.96877 19.6582 5.74513C19.6584 5.92948 19.6223 6.11207 19.5518 6.28243C19.4814 6.4528 19.378 6.60759 19.2477 6.73795C19.1173 6.8683 18.9625 6.97166 18.7922 7.0421C18.6218 7.11255 18.4392 7.14868 18.2549 7.14845V7.14845Z" fill="#EE2B47"/>
		</svg>,
		text : "@reyhan_roze",
	},
];

const scrollToTop = () => {
	window.scrollTo({
		behavior : "smooth",
		top      : 0
	});
};

const SideTitle = styled(Title)`
    writing-mode: vertical-rl;
    color: var(--color-accent-1);
    position: absolute;
    width: min-content;
    height: max-content;
    right: 8%;
    bottom: 2%;
    font-size: 0.4em;
    z-index: 2;
`;

const BGT = styled(BGText)`
    position: absolute;
    z-index: 1;
	writing-mode: vertical-rl;
    right: 0;
`;

const ContactsLinks = () => {
	return (
		<Container>
			<ContactsList contacts={contacts} />
			<svg onClick={scrollToTop} id="button-home" width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="23.1482" width="32.7365" height="32.7365" transform="rotate(45 23.1482 0)" fill="#EE2B47"/>
				<path d="M24.6752 35.4089H21.6211V16.8694L15.5128 23.0492L12.4587 21.5043L23.1482 10.6895L33.8376 21.5043L30.7835 23.0492L24.6752 16.8694V35.4089Z" fill="#F6F6F6"/>
			</svg>
			<SideTitle>HERE YOU GO</SideTitle>
			<BGT rows={2} cols={7} text="CONTACTS"/>
		</Container>
	);
};

export default ContactsLinks;