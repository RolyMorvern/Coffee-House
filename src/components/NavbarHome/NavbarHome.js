import "./NavbarHome.css";
import $ from "jquery";
import Logo from "../../Images/logo.svg";

function showNav () {
	if ($(".mobile-links").css("display") == "none") {
		$(".mobile-links").fadeIn();
		$(".mobile-links").css("display", "flex");
		$("body").css("overflow", "hidden");
	} else {
		$(".mobile-links").fadeOut();
		$("body").css("overflow-y", "visible");
	}
}
function clickNav () {
	$("body").css("overflow-y", "visible");
	$(".mobile-links").fadeOut();
    $("#checkbox").click();
}
function NavbarHome () {
	return (
		<nav className="home_nav">
			<a href="/" className="logo">
				<img src={Logo} alt="Logo" />
				<h3 className="fascinate">Coffee House</h3>	
			</a>
			<input id="checkbox" type="checkbox" />
		    <label onClick={() => {showNav()}} className="toggle" for="checkbox">
		        <div id="bar1" className="bars"></div>
		        <div id="bar2" className="bars"></div>
		        <div id="bar3" className="bars"></div>
		    </label>
		    <div className="mobile-links">
				<a onClick={() => {clickNav()}} href="#home-contact" className="numans">Contact</a>
				<a onClick={() => {clickNav()}} href="/shop" className="numans">Shop</a>
				<a onClick={() => {clickNav()}} href="#home-about" className="numans">About</a>
		    </div>
			<div className="links">
				<a href="#home-contact" className="numans">Contact</a>
				<a href="/shop" className="numans">Shop</a> 
				<a href="#home-about" className="numans">About</a>
			</div>
		</nav>
	)
}

export default NavbarHome;