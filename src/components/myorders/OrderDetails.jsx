import React from 'react'

function OrderDetails() {
  return (
<section className='orderDetails'>
    <main>
        <h1>Order Details</h1>
       
        <div>
         <h1>Shipping</h1>
            <p>
                <b>Address</b>
                {"ijfscusckl"}
            </p>
         </div>
         <div>
         <h1>Contact</h1>
            <p>
                <b>Name</b>
                {"lilly"}
            </p>
            <p>
                <b>Phone</b>
                {52847986866}
            </p>
         </div>
         <div>
         <h1>Status</h1>
            <p>
                <b>Order Status</b>
                {"processing"}
            </p>
            <p>
                <b>Placed At</b>
                {"23-1-2022"}
                </p>
         </div>
         <div>
         <h1>Payment</h1>
            <p>
                <b>Payment Method</b>
                {"online"}
            </p>
            <p>
                <b>Payment reference</b>
                #{"aKJSSLKDJJLJ"}
            </p>
            <p>
                <b>Paid At</b>
                {"23-1-2022"}
            </p>
         </div>
         <div>
         <h1>Amount</h1>
            <p>
                <b> Item Total</b>
                ₹{2000}
            </p>
            <p>
                <b>Shipping charges</b>
                ₹{100}
            </p>
            <p>
                <b>Tax</b>
                ₹{50}
            </p>
            <p>
                <b>Total Amount</b>
                ₹ {2000+ 100+ 50}
            </p>
         </div>
         <article>
            <h1>Ordered items</h1>
            <div>
                <h4>biriyani</h4>
                <div>
                    <span>{4}</span> x
                    <span> {1200}</span>
                    </div>
                 </div>
                 <div>
                <h4>pasta</h4>
                <div>
                    <span>{2}</span> x
                    <span> {800}</span>
                    </div>
                 </div>
                 <div>
                <h4>pizza</h4>
                <div>
                    <span>{3}</span> x
                    <span> {1400}</span>
                    </div>
                 </div>
                 <div> <h4 style={{fontWeight:800,}}>Sub Total </h4>
                 <div style={{fontWeight:800}}> ₹{2500} </div>
                 </div>
            
         </article>
    </main>


</section>
  )
}

export default OrderDetails