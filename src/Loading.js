import React, { useEffect, useState } from "react";
import "./Loading.css";
import Animation from "./Images/coffee-loading-animation.gif";

function Loading() {
  const [dots, setDots] = useState("...");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === "...") {
          return ".";
        } else if (prevDots === ".") {
          return "..";
        } else {
          return "...";
        }
      });
    }, 750);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="loading">
      <h1 id="loading-header">
        Loading {dots}
      </h1>
      <img id="loading-img" src={Animation} alt="Loading Animation" />
    </div>
  );
}

export default Loading;
