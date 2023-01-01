import React from 'react';
import pasta from '../../assets/pasta.jpg';
import pizza from '../../assets/pizza.jpg';
import biriyani from '../../assets/biriyani.jpg'
import { Link } from 'react-router-dom';

const CartItem=({value,title,img,increment,decrement})=>(
   <div className='cartitem'>
  <div>
    <h4>{title}</h4>
    <img src={img} alt='item'></img>

  </div>
  <div>
    <button onClick={increment}>-</button>
    <input type="number " readOnly value={value} />
    <button onClick={decrement}>+</button>
  </div>
   </div>   
)

function Cart() {
    const increment=(item)=>{

    }
    const decrement=(item)=>{

    }
  return (
    <section className='cart'>
        <main>
          <CartItem title={'biriyani'} img={biriyani} value={0} increment={()=> increment(1)} decrement={()=>decrement(1)}/>  
          <CartItem title={'pizza'} img={pizza} value={0} increment={()=> increment(1)} decrement={()=>decrement(1)}/> 
          <CartItem title={'pasta'} img={pasta} value={0} increment={()=> increment(1)} decrement={()=>decrement(1)}/> 
          <article>
            <div>
                <h4>Sub Total</h4>
                <p>₹{1500}</p>
                </div>
                <div>
                    <h4>Tax</h4>
                    <p>₹{1500*0.18}</p>
                </div>
                <div>
                    <h4>Shipping Charges</h4>
                    <p>₹{100}</p>
                </div>
                <div>
                    <h4>Total</h4>
                    <p>₹{1500+1500 *0.18 +200}</p>
                </div>
                <Link to='/shipping'>Checkout</Link>
          </article>
        </main>
    </section>
  )
}

export default Cart