import React from 'react'
import '../App.css';
import Product from './products';

function Main(props) {
    const {products,onadd}=props

    return (
        <div className='container-fluid main'>
           <h3>Offers</h3> 
           <div className='row '>

               {products.map(product=>(<Product key={product.id} product={product} onadd={onadd}/>))}
              
           </div>
        </div>
    )
}

export default Main
