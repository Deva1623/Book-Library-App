import { Link } from "react-router-dom"
import '../App.css'

//---Navbar--------

const NavBar = () => {

    return (
        <nav className="bg-gray-800 text-white text-xs md:text-xl font-sans font-bold p-4 w-full flex justify-between items-center">
             
            
           <div>
             <i className="fas fa-book text-sm md:text-3xl rotate" ></i>
           </div>
    
            <ul className="flex justify-end gap-8">
            
              <li className="bg-gray-700 p-2 rounded-md font-mono hover:bg-amber-200 hover:text-black cursor-pointer"><Link className=" py-2" to="/"><i className="fas fa-home mr-2"></i>Home</Link></li>
              <li className="bg-gray-700 p-2 rounded-md font-mono hover:bg-amber-200 hover:text-black cursor-pointer"><Link className=" py-2" to="/browse-books"><i className="fas fa-book-open mr-2"></i>Browse Books</Link></li>
              <li className="bg-gray-700 p-2 rounded-md font-mono hover:bg-amber-200 hover:text-black cursor-pointer"><Link className=" py-2" to="/add-book"><i className="fas fa-plus mr-2"></i>Add Book</Link></li>
            
            </ul>

        </nav>
        
    )
}

export default NavBar;