import React from "react";
import "./HomeContact.css";
import Stacks from "../../Images/home-contact-stacks.svg";
import Bubbles from "../../Images/home-contact-bubbles.svg";
import $ from "jquery";

function HomeContact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = $("#home-contact-name").val();
    alert(`${name}, Your message has been sent.`);
  };

  return (
    <section id="home-contact">
      <img src={Stacks} alt="UI Stacks image." id="home-contact-stacks" />
      <div className="container-no-top">
        <h1>Contact</h1>
        <img src={Bubbles} alt="Bubbles" id="home-contact-bubbles" />
        <div id="home-contact-upper-layer">
          <form id="home-contact-form" onSubmit={handleSubmit}>
            <input
              placeholder="Enter your name"
              id="home-contact-name"
              type="text"
              className="home-contact-input"
            />
            <input
              placeholder="Enter your email"
              type="email"
              className="home-contact-input"
            />
            <textarea
              placeholder="Enter your message ..."
              id="home-contact-textarea"
              cols="35"
              rows="10"
            ></textarea>
            <input type="submit" value="Submit" className="home-contact-input" />
          </form>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

export default HomeContact;
