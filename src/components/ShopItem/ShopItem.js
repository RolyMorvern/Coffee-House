import "./ShopItem.css";
import { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "../NavbarShop/NavbarShop";
import Btn from "./ShopItemBtn/ShopItemBtn";
import BuyWith from "./BuyWith/BuyWith";
import { BsCart, BsShare } from "react-icons/bs";
import { FaSquareXTwitter, FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../../Loading";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cartSlice";

function ShopItem (props) {
	useEffect(() => {
		document.title = `${props.name} | Coffee House`
	}, []);
	const dispatch = useDispatch();
	const items = useSelector(state => state.cartSlice.items);
	const [isLoading, setIsLoading] = useState(true);
	  useEffect(() => {
	    setTimeout(() => {
	      setIsLoading(false);
	    }, 3000);
	  }, []);
	function changeBg () {
		if ($("#product-page-bg").css("background-color") == "rgb(140, 115, 105)") {		
			$("#product-page-bg").css("background", "var(--bg-dark)");
		} else {
			$("#product-page-bg").css("background", "var(--bg-light)");
		}
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
		console.log(items);
	}
	function shareModal () {
		window.scrollTo({
			top: 0
		});
		$("body").css("overflow", "hidden");
		$("#product-page-bg").append("<div class='backdrop'></div>");
		$("#product-page-share-modal").fadeIn();
		$("#product-page-share-modal").css("display", "flex");
	}
	function closeShareModal () {
		$("body").css("overflow-y", "visible");
		$(".backdrop").remove();
		$("#product-page-share-modal").fadeOut();
	}
	function createTwitterLink () {
		let name = props.name.split(" ");
		name = name.join("%20");
		const url = "https://twitter.com/intent/tweet?text=Check%20out%20Coffee%20House's%20new%20brew:%20" + name;
		return url;
	}
	function createFacebookLink() {
	    let name = props.name.split(" ");
	    name = name.join("%20");
	    const url = "https://www.facebook.com/sharer.php?u=&quote=Check%20out%20Coffee%20House's%20new%20brew:%20" + name;
	    return url;
	}
	return (
		<>
	      {isLoading ? <Loading /> : console.log("Data Loaded Successfully")}
			<div id="product-page-share-modal-container">
				<div id="product-page-share-modal">
					<span onClick={closeShareModal} id="share-modal-close"><AiOutlineClose /></span>
					<a id="share-twitter" target="_blank" href={createTwitterLink()}>
						<FaSquareXTwitter />
					</a>
					<a id="share-facebook" href={createFacebookLink()} target="_blank">
						<FaSquareFacebook />
					</a>
				</div>
			</div>
			<div id="product-page-bg">
				<Navbar changeBg={changeBg} />
				<div id="product-grid-container">
					<div className="product-grid-item">
						<img 
							loading="lazy"
							className={
								props.w ? 
								"product-page-img w-100" : 
								"product-page-img"
							} 
							src={props.img} 
							alt="Coffee Bag" 
						/>
					</div>
					<div className="product-grid-item" id="product-page-product-text">
						<section id="product-page-product-info">
							<div id="product-heading-container">
								<h2 className="fascinate">{props.name}</h2>
								<p className="numans">Only {props.price}</p>
								<hr />
							</div>
							<p className="numans" id="product-page-description">{props.description}</p>
							<div id="product-page-btn-container">
								<Btn click={addToCart} bg="#8C6046" width="200px" icon={<BsCart />} text="Add to cart" />
								<Btn click={shareModal} bg="transparent" width="130px" icon={<BsShare />} text="Share" border="1px solid white" />
							</div>
						</section>
						<br />
						<BuyWith />
					</div>
				</div>
			</div>
		</>
	)
}

export default ShopItem;