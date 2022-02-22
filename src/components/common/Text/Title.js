/* CMT this is an alternative to the .text-title css class which I'll use from now on */
import styled from "styled-components";

const letterSpace = "0.3em";

const Title = styled.h2`
	color: var(--color-primary-2);
	font-family: "Alfa Slab One";
	letter-spacing: ${letterSpace};
	margin-right: calc(-1 * ${letterSpace});
	font-weight: 400;
`;

export default Title;