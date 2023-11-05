import "./HomeHero.css";
import Button from "./HomeButton/HomeButton";

function HomeHero () {
	return (
		<section id="home-hero">
			<h1 id="home-hero-header">Highest quality coffees on the market!</h1>
			<p id="home-hero-subheader" className="numans">Indulge in one of our divine coffees!</p>
			<div id="home-hero-button-container">
				<Button link="/shop" text="Browse the collection" bg="#373B40" width="250px" align="left" arrow="true" />
				<Button link="#home-about" text="About Us" bg="rgba(0, 0, 0, 0)" border="1px solid white" width="150px" align="left" arrow="true" />
			</div>
			<br />
		</section>
	)
}

export default HomeHero;