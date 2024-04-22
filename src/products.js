import Product from "./product";
import "./products.css"
import { useState } from 'react';
import Searchbar from "./searchbar";

function Products(){
    const products = [
        {
        id: 1,
        title: 'PC Portable Gamer HP VICTUS',
        price: '7490 DH',
        thumbnail : 'HP16D0195NF.jpg'
        },
        {
        id: 2,
        title: 'PC Portable Gamer HP VICTUS',
        price: '2190 DH',
        thumbnail : 'HP14424U3EA.jpg'
        },
        {
        id: 3,
        title: 'Pc Portable Chromebook Acer',
        price: '3640 DH',
        thumbnail: 'NXATHEF002.jpg'
        },
        {
        id: 4,
        title: 'PC Portable - HUAWEI',
        price: '1270 DH',
        thumbnail: 'HUA6901443442959.jpg'
        },
        ];
        const[panier,setpanier]=useState(0)
        function handleclick(){
            setpanier(panier +1) 
        }
        const [nom,setnom]=useState('')
        let inputHandler=(e)=>{
            var  input=e.target.value.toLowerCase()
            setnom(input)
            onChercheSubmitApp(nom)
            

        }
        const [resultas,setResultas]=useState([])
        function onChercheSubmitApp(nom){
       
        setResultas(products.filter( item => item.title.toLowerCase().includes(nom)))
        }
        
    
        
        
    return(
        <>
        <Searchbar nom={nom} inputHandler={inputHandler}/>
        <p>{panier}</p>
        <section> {nom===''?products.map(product =>
           <Product title={product.title} price={product.price} thumbnail={product.thumbnail} handleclick= {handleclick} nom={nom}/>)
             :resultas.map( resulta=><Product title={resulta.title} price={resulta.price} thumbnail={resulta.thumbnail} handleclick= {handleclick} nom={nom}/>
            )}</section>
             </>
    )
}
export default Products;