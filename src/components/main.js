import React from 'react'
import '../App.css';
import Product from './products';
import '../media.css'
function Main(props) {
    const {products,onadd}=props

    return (
        <div className=' main'>
            <div className=' main-title'>
           <h3 >Offers</h3> 
           </div>
           <div className='row '>

               {products.map(product=>(<Product key={product.id} product={product} onadd={onadd}/>))}
              
           </div>
        </div>
    )
}

export default Main
