import React from 'react';
import {motion} from 'framer-motion';
import {FcGoogle} from 'react-icons/fc';

function Login() {
  return (
<section className='login'>
    <motion.button initial={{y:'100v'}} animate={{y:0}}>
      Login with google 
      <FcGoogle/>
    </motion.button>
</section>
  )
}

export default Login