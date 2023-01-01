import React from 'react'
import {motion} from 'framer-motion';

function Menucard({itemNum,foodimg,title,price,handler,delay=0}) {
  return (
    <motion.div  className='menucard'
    initial={{x:"-100%",opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay,}}>
    <div>item:{itemNum}</div>
    <main>
        <img src={foodimg} alt='foood'></img>
        <h5> ₹{price}</h5>
        <p>{title}</p>
        <button onClick={()=>handler(itemNum)}>Buy Now</button>
    </main>
        </motion.div>
  )
}

export default Menucard