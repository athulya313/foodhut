import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai'

function MyOrders() {
  return (
    <section className='tableClass'>
        <main>
  <table>
    <thead>
        <tr>
            
        <th>Order Id</th>
        <th>Status</th>
        <th>Item Qtty</th>
        <th>Amount</th>
        <th>Payment Method</th>
        <th>Action</th>
        </tr>

    </thead>
    <tbody>
       <tr>
        <td>#6638558 </td>
        <td>processing</td>
        <td>4</td>
        <td>₹{1600}</td>
        <td>COD</td>
        <td>
            <Link to={`/order/${"xaxxj"}`}> <AiOutlineEye/> </Link>
            </td>
            </tr> 
    </tbody>
  </table>
        </main>
    </section>

  )
}

export default MyOrders