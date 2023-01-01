import React from 'react';
import { motion} from 'framer-motion';
import Founder from './Founder'
import Menu from './Menu';

function Home() {
  const options= { initial:{x:"-100%",opacity:0,}, whileInView: { x:0, opacity:1}};
  return (
    <>
  <section className='home'>
    <div>
      <motion.h1 {...options}>Food Hut</motion.h1>
      <motion.p {...options} transition={{delay:0.3}}>Taste the best in every bite </motion.p>
    </div>
    <motion.a initial={{y:"-100%",opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:0.5}} href='#menu'>
      Explore Menu
    </motion.a>
  
  </section>
  <Founder/>
  <Menu/>

  </>
  )
}

export default Home