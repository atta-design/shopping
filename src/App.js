import './App.css';
import Header from './components/header'
import Main from './components/main'
import Basket from './components/basket'
import data from './components/data'
import Dicription from './components/Dicription'
import Carousels from './components/Carousel'
import React ,{useState} from 'react'
import {Route} from 'react-router-dom'

function App() {
  const {products} = data 
 const [carditem,setcarditem]=useState([])
 const onadd=(product)=>{

  const exist=carditem.find(x=>x.id===product.id);
  if(exist){
    setcarditem(carditem.map(x=>x.id===product.id?{...exist,qyt:exist.qyt+1}:x))
  }
  else{
  setcarditem([...carditem,{...product,qyt:1}])}
 }

 const onremove=(product)=>{

  const exist=carditem.find(x=>x.id===product.id);
  if(exist.qyt===1){
    setcarditem(carditem.filter(x=>x.id!==product.id))
  }else{setcarditem(carditem.map((x)=>x.id===product.id?{...exist,qyt:exist.qyt-1}:x))}
 }

 

  return (
    
    <div className="App">
     <Header carditemnum={carditem.length} />
     <Carousels/>
     <div className='row ml-1 mr-1'>
<Main onadd={onadd} products={products}/>
<Basket onadd={onadd} onremove={onremove} carditem={carditem} />
{/* <Dicription/> */}

{/* <Route component={Input}/> */}
</div>
    </div>
  );
}

export default App;
