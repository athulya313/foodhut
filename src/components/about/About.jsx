import React from 'react';
import profile from '../../assets/profile.jpg';
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";

function About() {
  return (
    <section className="about">
    <main>
      <h1>About Us</h1>

      <article>
        <h4>Food Hut</h4>
        <p>
          We provide all the varieties of food with its authentic taste
        </p>

        <p>
          Order anything which your heart wants
        </p>

        <Link to="/">
          <RiFindReplaceLine />
        </Link>
      </article>

      <div>
        <h2>Founder</h2>
        <article>
          <div>
            <img src={profile} alt="Founder" />
            <h3>Athulya</h3>
          </div>

          <p>
            I am the founder of Food Hut....
          </p>
        </article>
      </div>
    </main>
  </section>
  )
}

export default About