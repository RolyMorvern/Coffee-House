import "./ShopCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";

function ShopCard (props) {
	const dispatch = useDispatch();
	const style = {
		background: `url(${props.img})`
	}
	function addToCart (event, info = props) {
		event.preventDefault();
		const itemToAdd = {
			priceNumber: props.priceNumber,
			id: Math.random() * 100000,
			name: props.name,
			price: props.price,
			img: props.img
		}
		dispatch(addItem(itemToAdd));
	}
	return (
		<a className="shop-card" href={props.link}>
			<div style={style} className="shop-cart-image"></div>
			<h3 className="fascinate shop-card-name">{props.name}</h3>
			<p className="numans shop-card-price">{props.price}</p>
			<div className="shop-card-icons">
				<span onClick={addToCart} className="shop-card-cart">
					<BsCartPlus />
				</span>
				<span className="shop-card-arrow">
					<AiOutlineArrowRight />
				</span>
			</div>
		</a>
	)
}

export default ShopCard;