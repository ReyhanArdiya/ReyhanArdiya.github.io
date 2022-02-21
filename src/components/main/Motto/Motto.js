import "./Motto.css";
import BGText from "../../common/BGText/BGText.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Container = styled.section`
	transition: all 0.4s ease-in;
	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
	opacity: ${({ visible }) => visible ? "1" : "0"};
`;

let isAnimated = false;
const Motto = () => {
	const { ref, inView } = useInView({
		root      : null,
		threshold : 0.1
	});

	if (inView) {
		isAnimated = true;
	}

	return (
		<Container id="motto" ref={ref} visible={isAnimated}>
			<p className="text-subtitle">My motto is to...</p>
			<article id="motto-text">
				<BGText cols={4} rows={8} text="EVERYDAY" />
				<h2 className="text-title">KEEP</h2>
				<h3 className="text-title">ON <span>LEARNING</span></h3>
			</article>
		</Container>
	);
};

export default Motto;