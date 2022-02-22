/* CMT this is an alternative to the .text-title-sideways css class which I'll use from now on */
import styled from "styled-components";

const TitleSideways = styled.h2`
    align-items: center;
	background-color: var(--color-primary-2);
	color: var(--color-accent-1);
	display: flex;
	font-family: "Archivo Black";
	font-weight: 400;
	justify-content: center;
	min-width: 26px;
	transform: rotate(180deg);
	writing-mode: vertical-rl;
`;

export default TitleSideways;