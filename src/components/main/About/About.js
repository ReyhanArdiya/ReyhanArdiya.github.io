// import "./About.css";
import BGText from "../../common/BGText/BGText.js";
import TitleSideways from "../../common/Text/TitleSideways.js";
import styled from "styled-components";

const AboutContainer = styled.section`
	& {
		grid-area: about;
		background-color: var(--color-primary-1);
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 0.875em;
		height: 5.25em;
		padding-right: 0.8em;
		position: relative;
		overflow: hidden;
	}

	& .BGT {
		font-size: 0.43em;
		position: absolute;
		z-index: 0;
	}

	& .BGT:first-of-type {
		top: 0;
	}

	& .BGT:last-of-type {
		bottom: 0;
	}

	& #about-text {
		z-index: 1;
		grid-area: abtxt;
		display: grid;
		grid-template-areas:
			"left webdev webdev"
			"left in training";
		row-gap: 0.5em;
	}

	& #about-header {
		z-index: 2;
		align-self: stretch;
		grid-area: left;
		font-size: 0.43em;
		padding: 0 0.55em;
	}

	& #about-title-one {
		grid-area: webdev;
		color: var(--color-accent-1);
		text-align: right;
		align-items: flex-end;
		display: flex;
		justify-content: flex-end;
	}

	& small {
		position: relative;
		bottom: 0.8em;
		grid-area: in;
		color: var(--color-accent-1);
		align-items: flex-start;
		display: flex;
		justify-content: flex-end;
	}

	& #about-title-two {
		grid-area: training;
		align-items: center;
		display: flex;
		justify-content: flex-end;
		text-align: right;
	}
`;

const About = () => {
	return (
		<AboutContainer>
			<BGText cols={3} rows={3} text="WEB DEVELOPER" />
			<TitleSideways id="about-header">Who am i</TitleSideways>
			<section id="about-text">
				<h2 id="about-title-one" className="text-title">WEB DEVELOPER</h2>
				<small className="text-subtitle">in</small>
				<h2 id="about-title-two" className="text-title">TRAINING</h2>
			</section>
			<BGText cols={5} rows={3} text="TRAINING" />
		</AboutContainer>
	);
};

// const About = () => {
// 	return (
// 		<section id="about">
// 			<BGText cols={3} rows={3} text="WEB DEVELOPER"/>
// 			<TitleSideways id="about-header">Who am i</TitleSideways>
// 			<section id="about-text">
// 				<h2 id="about-title-one" className="text-title">WEB DEVELOPER</h2>
// 				<small className="text-subtitle">in</small>
// 				<h2 id="about-title-two" className="text-title">TRAINING</h2>
// 			</section>
// 			<BGText cols={5} rows={3} text="TRAINING"/>
// 		</section>
// 	);
// };

export default About;