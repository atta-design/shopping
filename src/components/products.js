import React,{useState} from 'react'
import '../App.css';
import {Modal,Button} from 'react-bootstrap'
import '../media.css'


function Products(props) {
    const[show,setShow]=useState(false)

    const {product,onadd}=props
const handleshow=()=>{
    setShow(true)
}
const handleClose=()=>{
    setShow(false)
}



    return (
        <> 
        <div className='box' >
           <div onClick={handleshow} >
                <div  >
                   
            <img className='small' src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div> 
          
            </div>
            </div>
           
           
        </div>
 
        <Modal show={show} onHide={handleClose}  size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p >Color:{product.color}</p>
        <p>Connect:{product.connect}</p>
        <p>Weight:{product.weight}</p>
        
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="success" onClick={()=>onadd(product)} onClickCapture={handleClose} >Add to Basket </Button>
        </Modal.Footer>
      </Modal>




      
        </>
    )
}

export default Products

