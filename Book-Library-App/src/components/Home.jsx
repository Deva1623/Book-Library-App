
import { Link } from "react-router-dom";
import PopularBooks from "./PopularBooks";

//---this is landing page----------
const Home = () =>{
    
    //categories available-------
    const categories = ['Mystery', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance', 'Horror'];


    return (
        <section>
        
          <h1 className="text-center text-slate-800 font-mono text-lg md:text-2xl mt-4 capitalize">Welcome,to Online Library System</h1>
     
          <div className="text-center container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">

            <div>
              <h3 className="bg-amber-200 mb-6 text-xl md:text-2xl font-mono">Categories</h3>

              <ul  className="flex flex-col justify-center items-center gap-4">
                
                {/*-----iterating over categories array to display all categories-------------*/}
                {categories.map((category, index)=>(

                <li key={index} className='bg-gray-800 font-bold hover:bg-green-200 hover:text-black w-44 text-white p-2 rounded-md font-mono transition-colors text-sm md:text-lg'>
                    <Link className='px-5 py-2' to={`/browse-books/${category}`}>{category} </Link>
                </li>

                )   
              )}

              </ul>

            </div>
            
            {/*-------nested child componenet----- */}
            <div>
              <PopularBooks></PopularBooks>
            </div>

        </div>

        </section>
    )
}

export default Home;