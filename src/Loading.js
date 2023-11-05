import "./Loading.css";
import Animation from "./Images/coffee-loading-animation.gif";

function Loading () {
	return (
		<div className="loading">
			<h1 id="loading-header">
				Loading ...
			</h1>
			<img id="loading-img" src={Animation} alt="Loading Animation" />
		</div>
	)
};

export default Loading;
