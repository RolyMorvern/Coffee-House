import "./HomeButton.css";
import { VscArrowRight } from "react-icons/vsc";

function HomeButton (props) {
	const buttonStyle = {
		backgroundColor: props.bg, 
		width: props.width,
		textAlign: props.align,
		border: props.border
	};
	return (
		<a className="home-button-link" href={props.link}>
			<button className="home-button" style={buttonStyle}>
				<p>{props.text}</p>
				{props.arrow == "true" ? <VscArrowRight className="home-button-arrow" /> : <br />}
			</button>
		</a>
	)
}

export default HomeButton;