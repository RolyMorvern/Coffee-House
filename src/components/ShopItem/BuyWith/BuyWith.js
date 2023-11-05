import "./BuyWith.css";
import ProductCard from "../../ShopMain/ShopCard/ShopCard";
import ProductList from "../../../ProductList.js";

function BuyWith () {
	const list = ProductList;
	function generateNums () {
	    const list = ProductList;
	    let randomNumbers = [];
	    while (randomNumbers.length < 3) {
	        let randomNumber = Math.floor(Math.random() * list.length) + 1;
	        if (!randomNumbers.includes(randomNumber)) {
	            randomNumbers.push(randomNumber);
	        }
	    }
	    return randomNumbers;
	};
	const nums =  generateNums();
	return (
		<section id="buy-with">
			<h2 className="fascinate">Buy With</h2>
			<hr />
			<div id="product-page-cards-container">
				{
					nums.map(num => {
						return (
							<ProductCard id={list[num].id} priceNumber={list[num].priceNumber} img={list[num].img} name={list[num].name} price={list[num].price} link={list[num].link} />
						)
					})
				}
			</div>
		</section>
	)
}

export default BuyWith;