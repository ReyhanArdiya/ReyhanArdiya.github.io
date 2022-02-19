import BGText from "../../common/BGText/BGText.js";
import TextP from "../../common/Text/TextP.js";
import Title from "../../common/Text/Title.js";
import styled from "styled-components";

const ProjectCardContainer = styled.article`
    background: red;
`;

const ProjectIframe = styled.iframe``;


const ProjectHeader = styled.header``;

const ProjectBGT = styled(BGText)``;

const ProjectTitle = styled(Title)``;

const ProjectDesc = styled(TextP)``;

const Projectcard = ({ propsDestruct }) => {
	return (
		<ProjectCardContainer>
			<ProjectIframe />
			<ProjectHeader>
				<ProjectBGT />
				<ProjectTitle></ProjectTitle>
			</ProjectHeader>
			<ProjectDesc></ProjectDesc>
		</ProjectCardContainer>
	);
};

export default Projectcard;