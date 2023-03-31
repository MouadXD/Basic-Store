import { createContext, useState, useEffect } from "react";

export const Context = createContext();

const AppContext = ({children}) => {

   const initialState = {
      data: [],
      isLoading: true,
      isCartOpen: false,
      productsCount: 0,
      selectedCategory: "all",
      searchQuery: '',
      iltredArray: []
   }
   
   const [ state, setState ] = useState(initialState);

   useEffect(() => {
      setState({...state, data: [], isLoading: true})
      fetch(`https://fakestoreapi.com/products${state.selectedCategory === "all" ? '' : "/category/"+state.selectedCategory}`)
         .then(resp => resp.json())
         .then(respData => {
            setState({...state, data: respData ,isLoading: false})
         })
   }, [state.selectedCategory])

   return (
      <Context.Provider value={
         {state, setState}
      }>
         {children}
      </Context.Provider>
   )
}

export default AppContext