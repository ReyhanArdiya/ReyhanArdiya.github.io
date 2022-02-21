import "./Intro.css";
import BGText from "../../common/BGText/BGText.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.section`
	transition: all 0.4s ease-in;
	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
	opacity: ${({ visible }) => visible ? "1" : "0"};
`;

let isAnimated = false;
const Intro = () => {
	const { ref, inView } = useInView({
		root      : null,
		threshold : 0.1
	});

	if (inView) {
		isAnimated = true;
	}

	return (
		<Container id="intro" ref={ref} visible={isAnimated}>
			<p className="text-subtitle">Hey! I'm,</p>
			<div className="text-title">
				<BGText cols={9} rows={4} text="HEY"/>
				<h1 >
					<span>REY</span><span>HAN</span>
				</h1>
			</div>
			<p className="text-subtitle">I am a...</p>
		</Container>
	);
};

export default Intro;