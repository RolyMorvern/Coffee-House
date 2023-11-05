import "./CartCard.css";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../redux/cartSlice";

function CartCard (props) {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cartSlice.items);
	function handleRemoveItem () {
		let index;
		for (let i = 0; i < items.length; i++) {
			if (items[i].id == props.index) {
				index = i;
			}
		}
		dispatch(removeItem(index));				
	}
	return (
		<div className="cart-card">
			<img src={props.img} alt="Coffee Bag" className="cart-card-image" />
			<h3 className="fascinate">{props.name}</h3>
			<p className="numans">{props.price}</p>
			<span onClick={handleRemoveItem} className="cart-card-delete">
				<BsTrash3 />
			</span>
		</div>
	)
}

export default CartCard;