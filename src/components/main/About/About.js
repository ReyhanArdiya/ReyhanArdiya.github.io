// import "./About.css";
import BGText from "../../common/BGText/BGText.js";
import TitleSideways from "../../common/Text/TitleSideways.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const AboutContainer = styled.section`
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
	transition: all 0.4s ease-in;
	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
	opacity: ${({ visible }) => visible ? "1" : "0"};

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
		display: grid;
		grid-template-areas:
			"left webdev webdev"
			"left in training";
		row-gap: 0.5em;
	}

	& #about-header {
		z-index: 2;
		align-self: stretch;
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

let isAnimated = false;
const About = () => {
	const { ref, inView } = useInView({
		root      : null,
		threshold : 0.1
	});

	if (inView) {
		isAnimated = true;
	}

	return (
		<AboutContainer id="about" ref={ref} visible={isAnimated}>
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