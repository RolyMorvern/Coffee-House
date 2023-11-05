import "./ShopItemBtn.css";

function ShopItemBtn (props) {
	const styles = {
		background: props.bg,
		width: props.width,
		border: props.border
	}
	return (
		<button onClick={props.click} style={styles} className="shop-item-btn">
			<span id="shop-item-btn-icon">{props.icon}</span>
			<span id="shop-item-btn-text">{props.text}</span>
		</button>
	)
}

export default ShopItemBtn;