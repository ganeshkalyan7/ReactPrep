//import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function HomePage() {
  return (
    <div className={styles.Home}>
      <Nav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>

        <Link to="/Applayout" className="cta">
          Start tracking now
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
