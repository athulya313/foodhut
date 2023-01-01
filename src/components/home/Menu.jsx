import React from 'react'
import Menucard from './Menucard';
import pasta from '../../assets/pasta.jpg';
import pizza from '../../assets/pizza.jpg';
import biriyani from '../../assets/biriyani.jpg'

function Menu() {
    const addToCartHandler=(itemNum)=>{

    }
  return (

 <section id='menu'>
    <h1>Menu</h1>
    <div>
        <Menucard itemNum={1} foodimg={pasta} title="pasta" price={400} handler={addToCartHandler} delay={0.3} />
        <Menucard itemNum={2} foodimg={pizza} title="pizza" price={300} handler={addToCartHandler} delay={0.5}/>
        <Menucard itemNum={3} foodimg={biriyani} title="biriyani" price={220} handler={addToCartHandler} delay=
        {0.8}/>
        </div>

 </section>
  )
}

export default Menu