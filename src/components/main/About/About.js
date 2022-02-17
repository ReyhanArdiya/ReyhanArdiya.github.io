import "./About.css";
import BGText from "../../common/BGText/BGText.js";
import TitleSideways from "../../common/Text/TitleSideways.js";

const About = () => {
	return (
		<section id="about">
			<BGText cols={3} rows={3} text="WEB DEVELOPER"/>
			<TitleSideways id="about-header">Who am i</TitleSideways>
			<section id="about-text">
				<h2 id="about-title-one" className="text-title">WEB DEVELOPER</h2>
				<small className="text-subtitle">in</small>
				<h2 id="about-title-two" className="text-title">TRAINING</h2>
			</section>
			<BGText cols={5} rows={3} text="TRAINING"/>
		</section>
	);
};

export default About;