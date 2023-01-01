import React from 'react';
import {motion} from 'framer-motion';
import profile from '../../assets/profile.jpg';

function Founder() {
    const option={initial:{x:"-100%",opacity:0}, whileInView:{x:0,opacity:1}}
  return (
    <section className='founder'>
    <motion.div {...option}>
        <img src={profile} alt='founderprofile' height={200} width={200}></img>
        <h3>Athulya A</h3>
        <p>Hello,Iam the founder of Food Hut,Enjoy your Food...<br/>
        Treat Your tummy with yummy,coz u deserve it!!!
        </p>
    </motion.div>
    </section>
  )
}

export default Founder