import "./Motto.css";
import BGText from "../BGText/BGText.js";

const Motto = () => {
	return (
		<section id="motto">
			<p className="text-subtitle">My motto is to...</p>
			<article id="motto-text">
				<BGText cols={4} rows={8} text="EVERYDAY" />
				<h2 className="text-title">KEEP</h2>
				<h3 className="text-title">ON <span>LEARNING</span></h3>
			</article>
		</section>
	);
};

export default Motto;