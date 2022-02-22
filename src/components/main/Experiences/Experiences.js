import Learned from "./Learned.js";
import Learning from "./Learning.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const ExperiencesContainer = styled.section`
	grid-area: experiences;
	transition: all 0.4s ease-in;
	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
	opacity: ${({ visible }) => visible ? "1" : "0"};
`;

let isAnimated = false;
const Experiences = () => {
	const { ref, inView } = useInView({
		root      : null,
		threshold : 0.1
	});

	if (inView) {
		isAnimated = true;
	}

	return (
		<ExperiencesContainer id="experiences" ref={ref} visible={isAnimated}>
			<Learned />
			<Learning />
		</ExperiencesContainer>
	);
};

export default Experiences;