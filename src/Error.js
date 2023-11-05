import "./Error.css";
import $ from "jquery";
import { useEffect } from "react";
import Navbar from "./components/NavbarShop/NavbarShop";
import ErrorImage from "./Images/Error.svg";

function Error () {
	useEffect(() => {
		document.title = "404 Coffee House"
	}, []);
	function changeBg () {
		if ($("#error-bg").css("background-color") == "rgb(140, 115, 105)") {		
			$("#error-bg").css("background", "var(--bg-dark)");
		} else {
			$("#error-bg").css("background", "var(--bg-light)");
		}
	}
	return (
		<div id="error-bg">
			<Navbar changeBg={changeBg} />
			<div id="error-img-container">
			</div>
		</div>
	)
}

export default Error;