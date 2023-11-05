import { useEffect } from "react";
import "./Cart.css";
import Navbar from "./components/NavbarShop/NavbarShop";
import CartMain from "./components/CartMain/CartMain";
import $ from "jquery";
function Cart () {
	useEffect(() => {
		document.title = "Coffee House | Cart"
	}, []);
	function changeBg () {
		if ($("#cart-bg").css("background-color") == "rgb(140, 115, 105)") {		
			$("#cart-bg").css("background", "var(--bg-dark)");
		} else {
			$("#cart-bg").css("background", "var(--bg-light)");
		}
	}
	return (
		<div id="cart-bg">
			<Navbar changeBg={changeBg} />
			<CartMain />
		</div>
	)
}

export default Cart;