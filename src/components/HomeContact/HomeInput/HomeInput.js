import "./HomeInput.css";

function HomeInput (props) {
	const style = {
	}
	return (
		<input placeholder={props.placeholder} style={style} type={props.type} className="home-contact-input" />
	)
}

export default HomeInput;