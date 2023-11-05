import "./HomeAbout.css";

function HomeAbout () {
	return (
		<section id="home-about">
			<h1>About Us</h1>
			<p className="numans" id="home-about-text">Welcome to Coffee House, where the rich aroma of freshly brewed coffee has been enchanting enthusiasts since 1943. Our commitment to excellence is brewed into every cup, sourced from the finest beans and crafted with passion. With a legacy spanning decades, we invite you to savor the essence of tradition and taste the difference in every sip. Join us for a delightful journey through the world of coffee, where every moment is infused with the warmth of our heritage and the richness of our blends.</p>
			<div id="home-about-gallery">
				<div id="home-about-gallery-1" loading="lazy" className="home-about-gallery-item tall"></div>
				<div id="home-about-gallery-2" loading="lazy" className="home-about-gallery-item"></div>
				<div id="home-about-gallery-3" loading="lazy" className="home-about-gallery-item"></div>
				<div id="home-about-gallery-4" loading="lazy" className="home-about-gallery-item wide"></div>
			</div>
		</section>	
	)
}

export default HomeAbout;