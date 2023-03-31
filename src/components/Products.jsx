import '../Styles/Products.css'
import { Context } from '../helpers/Context'
import { useContext } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { ImSpinner2 } from "react-icons/im"
import { Link } from 'react-router-dom'

const Products = () => {

  const context = useContext(Context);
  const { state, setState } = context;

  const filteredArray = state.data.filter(element => element.title.toLowerCase().includes(state.searchQuery.toLowerCase()));

  const categories = ["all", "men's clothing", "women's clothing", "jewelery", "electronics"];

  return (
    <div className="allProducts">
      <div className="container">
        <h1>All Products</h1>
        <div className="filtering_items">
          <div className="search">
            <input className='searchInput' type="text" placeholder="Search..." value={state.searchQuery} onChange={(e) => setState({...state, searchQuery: e.target.value})} />
          </div>
          <div className="filter">
            {
              categories.map((element, index) => <button onClick={() => setState({...state, selectedCategory: element})}  className={`${state.selectedCategory == element ? "selectedCategory" : ''}`} key={index}>{element}</button>)
            }
          </div>
        </div>
          { state.isLoading && <ImSpinner2 className='spin' />}
        <div className="products">
          {
            filteredArray.length === 0 || state.searchQuery == '' ? (
              state.data.map(element => {
                const {id, image, title, price} = element;
                return (
                  <div key={id} className="product">
                    <div className="productImg">
                      <img src={image} alt={title} />
                    </div>
                    <div className="productInfo">
                      <p>{title.substring(0, 35)}...</p>
                      <div className="price_moreInfo">
                        <span>$ {price}</span>
                          <Link to={`/products/${id}`}>
                            <div className="moreInfoBtn">
                                <AiOutlineArrowRight />
                            </div>
                          </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            ) : (
              filteredArray.map(element => {
                const {id, image, title, price} = element;
                return (
                  <div key={id} className="product">
                    <div className="productImg">
                      <img src={image} alt={title} />
                    </div>
                    <div className="productInfo">
                      <p>{title.substring(0, 35)}...</p>
                      <div className="price_moreInfo">
                        <span>$ {price}</span>
                          <Link to={`/products/${id}`}>
                            <div className="moreInfoBtn">
                                <AiOutlineArrowRight />
                            </div>
                          </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Products;
