import { useParams } from "react-router-dom";
import { Context } from "../helpers/Context";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai'
import "../Styles/SingleProduct.css"


const SingleProduct = () => {

  const context = useContext(Context);
  const { state, setState } = context;

  const productId = useParams();
  const selectedProduct = state.data.filter(element => element.id == productId.id);
  const [{id, image, title, price, description, category, rating: { rate }}] = selectedProduct;

   return (
    <div className="container">
      <Link to='/'>
        <div className="backBtn">Back</div>
      </Link>
      <div className="selectedProduct">
        <div className="productImg">
          <img src={image} alt={title} />
        </div>
        <div className="singleProductInfo">
          <span className="category">{category}</span>
          <h3 className="title">{title}</h3>
          <span className="rating">
            {  
              [...Array(Math.round(rate))].map((e, index) => <span key={index}><AiFillStar /></span>)
            }
           </span>
          <h2 className="price">${price}</h2>
          <p className="description">{description}</p>
          <button className="buyBtn" onClick={() => setState({...state, productsCount: state.productsCount+=1})}>Buy Now</button>
        </div>
      </div>
    </div>

   )
}
 
 export default SingleProduct;
 