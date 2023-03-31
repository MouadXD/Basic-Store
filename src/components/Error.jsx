import { Link } from "react-router-dom"
import "../Styles/Error.css"

const Error = () => {
  return (
   <div className="pageNotFound">
      <div className="content">
        <h3>404 - Page Not Found</h3>
          <Link to='/'>
            <div className="backHomeBtn">
              Back Home
            </div>
          </Link>
      </div>
   </div>
  )
}

export default Error