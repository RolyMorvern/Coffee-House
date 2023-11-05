import "./CartMain.css";
import CartCard from "./CartCard/CartCard";
import { useSelector } from "react-redux";

function CartMain () {
	const items = useSelector(state => state.cartSlice.items);
	const subtotal = () => {
		let total = 0;
		for (let i = 0; i < items.length; i++) {
			total += items[i].priceNumber;
		};
		return "€" + Math.round(total * 100) / 100;
	};
	return (
		<>
			<header id="cart-header">
				<h1>My Cart ({items.length} items)</h1>
			</header>
			<br />
			<div id="cart-card-container">
				{
					items.length > 0 ? 
					items.map(product => {
						return (
							<CartCard link={product.link} img={product.img} name={product.name} price={product.price} priceNum={product.priceNumber} index={product.id} />
						)
					}) :
					<br />
				}
			</div>
			<div id="cart-subtotal-container">
				<h3 id="cart-subtotal" className="numans">Subtotal: <span id="cart-subtotal-number">{subtotal()}</span></h3>
			</div>
		</>
	)
}

export default CartMain;