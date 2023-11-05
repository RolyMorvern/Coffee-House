import React, { useState } from "react";
import "./NavbarShop.css";
import Logo from "../../Images/logo.svg";
import { BsSunFill, BsSun, BsCart } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import $ from "jquery";
import { useSelector } from "react-redux";

function NavbarShop(props) {
	const numItemsInCart = useSelector(state => state.cartSlice.items);
	const [isSunFilled, setIsSunFilled] = useState(true);
	function changeTheme() {
		setIsSunFilled(!isSunFilled);
		props.changeBg();
	}
	function showSideBar () {
		$("#nav-shop-sidebar").fadeIn();
	}
	function hideSideBar () {
		$("#nav-shop-sidebar").fadeOut();
	}
	return (
		<>
			<nav id="nav-shop">
			  <a href="/" className="logo">
			    <img src={Logo} alt="Logo" />
			    <h3 className="fascinate">Coffee House</h3>
			  </a>
			  <div id="shop-nav-icons">
			    <span onClick={changeTheme} className="shop-nav-icon" id="nav-shop-sun">
			      {isSunFilled ? <BsSunFill /> : <BsSun />}
			    </span>
			    <a href="/cart" className="shop-nav-icon" id="nav-shop-cart">
					<span className="numans" id="nav-shop-cart-num">{numItemsInCart.length}</span>
					<BsCart />
			    </a>
			    <span onClick={showSideBar} className="shop-nav-icon">
			      <AiOutlineMenu />
			    </span>
			  </div>
			</nav>
			<div id="nav-shop-sidebar">
				<span onClick={hideSideBar} id="shop-menu">
					<AiOutlineClose />
				</span>
				<div id="shop-sidemenu-links">
					<a href="/#home-contact" className="numans">Contact</a>
					<a href="/shop" className="numans">Shop</a>
					<a href="/#home-about" className="numans">About</a>
				</div>
			</div>
	</>
	);
}

export default NavbarShop;
