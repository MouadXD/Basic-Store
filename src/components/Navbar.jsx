import { Link } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs'
import '../Styles/Navbar.css'
import { useContext } from "react";
import { Context }  from "../helpers/Context";

const Navbar = () => {

   const context = useContext(Context);
   const { state } = context;

   return (
      <nav>
         <div className="container">
            <Link to='/'>
               <h2>Fake <span>Store</span></h2>
            </Link>
            <div className="icons">
               <div className="cart">
                  <div className="cart_icon">
                     <BsCart3 />
                     <span>{state.productsCount}</span>
                  </div>
                  { state.isCartOpen && <Cart /> }
               </div>
            </div>
         </div>
      </nav>
   )
}
 
 export default Navbar;
 