import React from 'react';
import {AiFillInstagram,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
    <div>
        <h2>Food Hut</h2>
        <p>Try our food for once and you will never regret for sure</p>
        <br/>
        <em>Suggest your feedback here...</em>
        <strong>All right received @foodhut</strong>
    </div>
    <aside>
        <h4>follow us</h4>
        <a href='https://instagram.com/foodhut'><AiFillInstagram/></a>
        <a href='https://facebook.com/foodhut'><AiFillFacebook/></a>
        <a href='https://twitter.com/foodhut'><AiFillTwitterCircle/></a>
    </aside>
    </footer>
  )
}

export default Footer
