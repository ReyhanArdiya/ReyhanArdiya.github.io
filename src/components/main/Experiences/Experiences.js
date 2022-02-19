import Learned from "./Learned.js";
import Learning from "./Learning.js";
import styled from "styled-components";

const ExperiencesContainer = styled.section`
	grid-area: experiences;
`;

const Experiences = () => {
	return (
		<ExperiencesContainer id="experiences">
			<Learned />
			<Learning />
		</ExperiencesContainer>
	);
};

export default Experiences;