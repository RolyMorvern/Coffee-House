import { useEffect } from "react";
import "./Shop.css";
import $ from "jquery";
import Navbar from "./components/NavbarShop/NavbarShop";
import Main from "./components/ShopMain/ShopMain";

function Shop () {
	useEffect(() => {
		document.title = "Coffee House | Shop"
	}, []);
	function changeBg () {
		if ($("#shop-bg").css("background-color") == "rgb(140, 115, 105)") {		
			$("#shop-bg").css("background", "var(--bg-dark)");
		} else {
			$("#shop-bg").css("background", "var(--bg-light)");
		}
	}
	return (
		<>
			<div id="shop-bg">
				<Navbar changeBg={changeBg} />
				<Main />
			</div>
		</>
	)
}

export default Shop;