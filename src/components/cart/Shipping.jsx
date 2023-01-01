import React from 'react'

function Shipping() {
  return (
   <section className='shipping'>
    <main>
     <h1>Shipping Details</h1>
     <form>
       <div>
        <label>House No</label>
        <input type={'text'} placeholder='Enter House No'/>
      </div> 
      <div>
        <label>City</label>
        <input type={'text'} placeholder='Enter your City'/>
      </div> 
      <div>
        <label>PinCode</label>
        <input type={'number'} placeholder='Enter PinCode'/>
      </div> 
      <div>
        <label>Phone No</label>
        <input type={'number'} placeholder='Enter Phone No'/>
      </div> 
      <button >Confirm Order</button>
     </form>
    </main>
   </section>
  )
}

export default Shipping