import "./Intro.css";
import BGText from "../../common/BGText/BGText.js";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const CircleWrapper = styled.div`
	min-width: ${({ size }) => size}em;
	min-height: ${({ size }) => size}em;
	max-width: ${({ size }) => size}em;
	max-height: ${({ size }) => size}em;
	border-radius: 50%;
	margin-right: -1em;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: flex-end;

	img {
		max-width: 110%;
		max-height: 110%;
		object-fit: cover;
		object-position: center;
		z-index: 1;
		transition: all 0.4s 0.3s ease-in;
    	transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
    	opacity: ${({ visible }) => visible ? "1" : "0"};
	}
`;

// XXX yes there are duplicate code for the animations on each section but i was in a rush so sorry future me :P
const Container = styled.section`
    transition: all 0.4s ease-in;
    transform: translateY(${({ visible }) => visible ? "0" : "1rem"});
    opacity: ${({ visible }) => visible ? "1" : "0"};
`;

const ContainerMain = styled.section`
    display: flex;
	flex-direction: row;
	max-width: 100%;
	
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
		<ContainerMain>
			<CircleWrapper className="circle profile-photo" size={3} visible={isAnimated}>
				<img src="https://storage.googleapis.com/aplikasi-profil-dicoding__main/reyhan_photo.png" alt="profile" />
			</CircleWrapper>

			<Container id="intro" ref={ref} visible={isAnimated}>

				<p className="text-subtitle">Hey! I'm,</p>
				<div className="text-title">
					<BGText cols={9} rows={4} text="HEY" />
					<h1>
						<span>REY</span>
						<span>HAN</span>
					</h1>
				</div>
				<p className="text-subtitle">I am a...</p>
			</Container>
		</ContainerMain>
	);
};

export default Intro;
