import { BrowserRouter, Routes, Route } from "react-router-dom"
import Products from "./components/Products"
import SharedLayout from "./components/SharedLayout"
import SingleProduct from "./components/SingleProduct"
import Context  from "./helpers/Context"
import Error from "./components/Error"

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Context>
  )
}

export default App
