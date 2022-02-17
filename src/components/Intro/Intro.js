import "./Intro.css";
import BGText from "../BGText/BGText.js";

const Intro = () => {
	return (
		<section id="intro">
			<p className="text-subtitle">Hey! I'm,</p>
			<div className="text-title">
				<BGText cols={9} rows={4} text="HEY"/>
				<h1 >
					<span>REY</span><span>HAN</span>
				</h1>
			</div>
			<p className="text-subtitle">I am a...</p>
		</section>
	);
};

export default Intro;