const productList = [
	{
		id: 1,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/5-lb-whole-bean-coffee-bag-783499-removebg-preview.png?raw=true",
		name: "Classic Brew",
		price: "€2.99",
		priceNumber: 2.99,
		link: "/shop/classic-brew",
		description: "'Classic Brew' is the epitome of exceptional coffee. Carefully curated from the finest coffee beans, our blend boasts a harmonious balance of robust flavors and a smooth, satisfying finish. Crafted with expertise, this coffee is perfect for both enthusiasts and casual drinkers. Experience the richness of premium quality, sip after sip."
	},
	{
		id: 2,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/Black-Kraft-Coffee-bags_1-removebg-preview.png?raw=true",
		name: "Vanilla Dream",
		price: "€3.49",
		priceNumber: 3.49,
		link: "/shop/vanilla-dream",
		description: "'Vanilla Dream' is an exquisite coffee blend that captures the essence of pure indulgence. Carefully infused with the delicate aroma of vanilla, this coffee offers a delightful twist to your daily brew. Sourced from the highest quality beans, Vanilla Dream combines rich, full-bodied flavor with a subtle sweetness that lingers on your palate. Every cup is a sensory delight, a perfect harmony of comforting warmth and irresistible vanilla notes. Whether you're starting your day or unwinding in the evening, Vanilla Dream is your passport to a world of delightful coffee experiences. Explore the enchanting fusion of premium coffee and velvety vanilla, cup after delicious cup."
	},
	{
		id: 3,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/CT_PRODUCTS_SOCIAL_DOG_000-SRP_2200x-removebg-preview.png?raw=true",
		name: "Caramel Delight",
		price: "€3.99",
		priceNumber: 3.99,
		link: "/shop/caramel-delight",
		description: "'Caramel Delight' is a captivating coffee blend that promises a luxurious and flavorful experience. This exquisite blend combines the boldness of premium coffee with the irresistible sweetness of caramel. Sourced from the finest beans, each cup boasts a perfect harmony of rich, aromatic coffee and the smooth, indulgent notes of caramel. With every sip, you'll be transported to a world of pure delight, making it the ideal choice for coffee enthusiasts seeking a decadent treat. Embrace the rich taste and aromatic allure of Caramel Delight, a coffee crafted to satisfy your cravings and awaken your senses."
	},
	{
		id: 4,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/Eclipse-Product-5lb-removebg-preview.png?raw=true",
		name: "Hazelnut Heaven",
		price: "€4.99",
		priceNumber: 4.99,
		link: "/shop/hazelnut-heaven",
		description: "'Hazelnut Heaven' is a delightful coffee blend that combines the richness of premium coffee with the enchanting sweetness of hazelnut. Sourced from the finest beans, each sip offers a heavenly experience, marrying bold coffee flavor with subtle, nutty notes. Indulge in the perfect harmony of taste and aroma, making every cup a moment of pure bliss."
	},
	{
		id: 5,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/Starbucks-Veranda-Blend-1024x1024-removebg-preview.png?raw=true",
		name: "Irish Cream",
		price: "€5.49",
		priceNumber: 5.49,
		link: "/shop/irish-cream",
		description: "'Irish Cream' is a captivating coffee blend that embodies the essence of indulgence. Crafted with the finest coffee beans and infused with the luxurious flavor of Irish cream, this blend offers a harmonious balance of rich coffee taste and creamy sweetness. Every sip is a delightful journey, combining the warmth of premium coffee with the smooth, velvety notes of Irish cream. This blend is perfect for those seeking a decadent coffee experience, creating moments of pure delight with every cup. Embrace the richness of Irish Cream and let your senses be enchanted by its exquisite flavor."
	},
	{
		id: 6,
		img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/White+Coffee+Bag.png?raw=true",
		name: "Coconut Bliss",
		price: "€4.79",
		priceNumber: 4.79,
		link: "/shop/coconut-bliss",
		description: "'Coconut Bliss' is a tropical delight in every cup. Our coffee blend combines the boldness of coffee with the sweet, nutty flavor of coconut, creating a refreshing and satisfying experience. Made from high-quality beans, each sip offers a taste of paradise, balancing the richness of coffee with the subtle hints of coconut. It's the perfect choice for those who love a hint of the tropics in their daily brew. Enjoy the simple pleasure of Coconut Bliss and let your taste buds take a mini-vacation with every sip."
	},
	{
		id: 7,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA5L3BmLXMxMTUtdGQtMTIzNy0wNmotbW9ja3VwLmpwZw-removebg-preview.png?raw=true",
        name: "Cinnamon Swirl",
        price: "€3.89",
        priceNumber: 3.89,
        link: "/shop/cinamon-swirl",
        description: "'Cinnamon Swirl' offers a comforting blend of coffee with the aromatic essence of cinnamon. This delightful combination brings warmth to your cup, creating a cozy and inviting coffee experience. Savor the sweet and spicy notes of cinnamon with every sip, making your coffee moments truly special."
    },
    {
		id: 8,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/coffee-1500X1500px-removebg-preview.png?raw=true",
        name: "Peppermint Perfection",
        price: "€4.69",
        priceNumber: 4.69,
        link: "/shop/peppermint-perfection",
        description: "'Peppermint Perfection' is a refreshing coffee blend infused with the invigorating flavor of peppermint. Cool and revitalizing, this blend offers a unique twist to your regular coffee routine. Experience the crispness of peppermint harmoniously blended with the rich coffee base, creating a delightful and energizing beverage."
    },
    {
		id: 9,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/coffee-bag-mockup-removebg-preview.png?raw=true",
        name: "Toffee Temptation",
        price: "€4.99",
        priceNumber: 4.99,
        link: "/shop/toffee-temptation",
        description: "'Toffee Temptation' is a luscious coffee blend that combines the sweetness of toffee with the boldness of coffee. Indulge in the caramelized goodness of toffee, expertly blended with premium coffee beans. Each sip offers a delectable balance of rich toffee flavor and smooth coffee, making it a delightful treat for your taste buds."
    },
    {
		id: 10,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/coffee_bag_mockup.png?raw=true",
        name: "Pumpkin Spice",
        price: "€4.29",
        priceNumber: 4.29,
        link: "/shop/pumpkin-spice",
        description: "'Pumpkin Spice' brings the cozy flavours of autumn into your coffee cup. This aromatic blend combines the warmth of pumpkin with the spice of cinnamon and nutmeg, creating a comforting and seasonal coffee experience. Embrace the autumn vibes with every sip of this delightful pumpkin spice-infused coffee."
    },
    {
		id: 11,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/image-removebg-preview%20.png?raw=true",
        name: "Almond Joy",
        price: "€5.19",
        priceNumber: 5.19,
        link: "/shop/almond-joy",
        description: "'Almond Joy' is a delightful coffee blend that captures the essence of the classic candy bar. Enjoy the rich flavors of chocolate, almond, and coconut expertly infused into premium coffee. Each sip offers a taste of indulgence, creating a satisfying and dessert-like coffee experience."
    },
    {
		id: 12,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/image-removebg-preview.png?raw=true",
        name: "Maple Pecan",
        price: "€4.79",
        priceNumber: 4.79,
        link: "/shop/maple-pecan",
        description: "'Maple Pecan' is a sweet and nutty coffee blend that combines the richness of maple syrup with the crunchiness of pecans. Indulge in the comforting flavors of maple and pecan expertly blended with premium coffee beans. Each sip offers a delightful balance of sweetness and nuttiness, making it a perfect choice for dessert coffee lovers."
    },
    {
		id: 13,
        img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/images-removebg-preview.png?raw=true",
        name: "Butterscotch Brew",
        price: "€3.99",
        priceNumber: 3.99,
        link: "/shop/butterscotch-brew",
        description: "'Butterscotch Brew' is a velvety coffee blend that brings the nostalgic flavors of butterscotch to your cup. Savor the buttery, caramelized notes of butterscotch expertly infused with premium coffee beans. Each sip offers a delightful and comforting experience, making it a perfect choice for those who enjoy the sweet and indulgent taste of butterscotch."
    },
    {
		id: 14,
    	img: "https://github.com/RolyMorvern/Coffee-house-images/blob/main/product-img-1-removebg-preview.png?raw=true",
        name: "Salted Caramel",
        price: "€5.29",
        priceNumber: 5.29,
        link: "/shop/salted-caramel",
        description: "'Salted Caramel' is a decadent coffee blend that combines the sweetness of caramel with a hint of saltiness. Indulge in the rich and creamy caramel flavors expertly blended with premium coffee beans. Each sip offers a perfect balance of sweetness and saltiness, creating a luxurious and satisfying coffee experience."
    }
];

export default productList;