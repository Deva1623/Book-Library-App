
import { Link } from "react-router-dom";

//this component is for unknown routes------------

function PageNotFound() {
    

    return(

        <section className="flex flex-col items-center justify-center h-screen">
        
          <img src='src\assets\utils\images\404.gif' className="h-80 w-auto"></img>

          <div className="flex flex-col items-center justify-center">

            <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>        
            <p className="font-bold mb-2">Oops! The page you are looking for does not exist.</p>
            <p className="font-semibold mb-2">It might be removed, had its name changed, or is temporarily unavailable.</p>

            <button className="bg-purple-600 text-white p-2 rounded-md font-mono">
              <Link to='/'><i className="fas fa-home p-1">Go back</i> </Link>
            </button>

          </div>
        
        </section>
    )
}

export default PageNotFound;