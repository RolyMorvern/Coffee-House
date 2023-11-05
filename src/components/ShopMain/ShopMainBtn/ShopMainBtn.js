import "./ShopMainBtn.css";

function ShopMainBtn (props) {
	return (
		<button onMouseOver={props.hover} onMouseOut={props.leave} className="shop-main-btn" onClick={props.click}>
		    <span>{props.icon}</span>
			<span className="numans shop-main-btn-text"> {props.text}</span>
		</button>
	)
}

export default ShopMainBtn;