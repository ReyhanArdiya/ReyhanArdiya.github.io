import "./About.css";
import BGText from "../BGText/BGText.js";

const About = () => {
	return (
		<section id="about">
			<BGText cols={3} rows={3} text="WEB DEVELOPER"/>
			<header className="text-title-sideways">Who am i</header>
			<section id="about-text">
				<h2 className="text-title">WEB DEVELOPER</h2>
				<small className="text-subtitle">in</small>
				<h2 className="text-title">TRAINING</h2>
			</section>
			<BGText cols={5} rows={3} text="TRAINING"/>
		</section>
	);
};

export default About;