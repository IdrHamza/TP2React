function Product(props){
   
    return(
        <div>

<div><img src={"/images/"+props.thumbnail} alt="aaa"></img></div>
          <div> <h3>{props.title}</h3></div>
           <div> <h5>{props.price}</h5></div>
           <button className="button"
                
                onClick={props.handleclick}
            
            
            >
                ajouter au panier
            </button>

        </div>

    )
}
export default Product;