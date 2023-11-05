import "./ShopMain.css";
import { useState } from "react";
import Btn from "./ShopMainBtn/ShopMainBtn";
import ProductList from "../../ProductList";
import ShopCard from "./ShopCard/ShopCard";
import { BsFillFunnelFill, BsArrowDownUp, BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import $ from "jquery";

function ShopMain () {
	const [ list, setList ] = useState(ProductList)
	function showFilter () {
		window.scrollTo({
			top: 0
		})
		$("body").css("overflow", "hidden");
		$("#shop-bg").append("<div class='backdrop'></div>");
		$("#shop-filter-modal-container").css("z-index", "5");
		$("#shop-filter-modal").fadeIn();
	}
	function hideFilter() {
	    $("body").css("overflow-y", "visible");
	    $(".backdrop").remove();
	    $("#shop-filter-modal-container").css("z-index", "-3");
	    $("#shop-filter-modal").fadeOut();
	}
	function handleFilterSubmit(event, productList = list) {
		event.preventDefault();
		hideFilter();
		let filteredProductList = productList.filter(product => {
			const productNameIncludesKeyword = !$("#shop-filter-modal-keyword").val() || product.name.includes($("#shop-filter-modal-keyword").val());
			const isPriceInRange = (!$("#shop-filter-modal-min-price").val() || product.priceNumber >= parseFloat($("#shop-filter-modal-min-price").val())) &&
			                       (!$("#shop-filter-modal-max-price").val() || product.priceNumber <= parseFloat($("#shop-filter-modal-max-price").val()));
			return productNameIncludesKeyword && isPriceInRange;
		});

		setList(filteredProductList);
	}
	function removeFilters (event) {
		event.preventDefault();
		hideFilter();
		setList(ProductList);
	}
	function showSortMenu () {
		$("#shop-sort-menu").css("display", "block");
	}
	function hideSortMenu () {
		$("#shop-sort-menu").css("display", "none");
	}
	function getPrices (productList) {
		let arr = [];
		for (let i = 0; i < productList.length; i++) {
			arr.push(productList[i].priceNumber);
		}
		return arr;
	}
	function sortAscending (productList) {
		let copy = productList;
		let prices = getPrices(copy);
		prices = prices.sort();
		let sortedArray = [];
		prices.map(productPrice => {
			for (let i = 0; i < copy.length; i++) {
				if (productPrice == copy[i].priceNumber) {
					sortedArray.push(copy[i]);
					copy.splice(i, 1);
				}
			}
		})
		setList(sortedArray);
	}
	function sortDescending (productList) {
		let copy = productList;
		let prices = getPrices(copy);
		prices = prices.sort(function(a, b) {
		    return b - a;
		});
		let sortedArray = [];
		prices.map(productPrice => {
			for (let i = 0; i < copy.length; i++) {
				if (productPrice == copy[i].priceNumber) {
					sortedArray.push(copy[i]);
					copy.splice(i, 1);
				}
			}
		})
		setList(sortedArray);
	}
	return (
		<>
			<div id="shop-filter-modal-container">
				<div id="shop-filter-modal">
					<span onClick={hideFilter} id="shop-filter-modal-close">
						<AiOutlineClose />
					</span>
					<h2>Filter</h2>
					<form>
						<label htmlFor="keyword" className="numans">Search by keyword: </label>
						<input type="text" name="keyword" id="shop-filter-modal-keyword" className="shop-filter-modal-input" />
						<br />
						<br />
						<label htmlFor="price" className="numans" id="shop-filter-modal-price-label">Price (€): </label>
						<input type="number" name="price" id="shop-filter-modal-min-price" className="shop-filter-modal-input shop-filter-modal-input-price" />
						<span className="numans" style={{padding: "0 15px"}}>to</span>
						<input type="number" name="price" id="shop-filter-modal-max-price" className="shop-filter-modal-input shop-filter-modal-input-price" />
						<br />
						<br />
						<br />
						<input onClick={handleFilterSubmit} type="submit" value="Apply Filters" className="shop-filter-modal-input shop-filter-modal-input-submit" />												
						<input onClick={removeFilters} type="submit" value="Remove Filters" className="shop-filter-modal-input shop-filter-modal-input-submit" />												
					</form>
				</div>
			</div>
			<section id="items">
				<h1>The Shop</h1>
				<p className="numans">Shop for your favourite brew!</p>
				<div className="container-no-top">
					<div id="shop-btn-container">
						<Btn click={showFilter} icon={<BsFillFunnelFill />} text="Filter" />
						<div id="shop-btn-sort">
							<Btn hover={showSortMenu} leave={hideSortMenu} icon={<BsArrowDownUp />} text="Sort" />
							<div id="shop-sort-menu" onMouseOver={showSortMenu} onMouseLeave={hideSortMenu}>
								<p onClick={() => sortAscending(list)} className="numans shop-sort-item"><BsGraphUpArrow /> Price low to high</p>
								<p onClick={() => sortDescending(list)} className="numans shop-sort-item"><BsGraphDownArrow /> Price high to low</p>
							</div>	
						</div>
					</div>
					<div id="shop-cards-container">
						{
							list.map(product => {
								return (
									<ShopCard id={product.id} priceNumber={product.priceNumber} link={product.link} img={product.img} name={product.name} price={product.price} />								
								)
							})
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default ShopMain;