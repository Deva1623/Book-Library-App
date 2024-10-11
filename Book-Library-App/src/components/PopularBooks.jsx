
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPopularBooks } from "../store/popularBooksSlice";

const PopularBooks = () => {
    
    
    const popularBooks  = useSelector(selectPopularBooks);    //taking popular books from redux store
    
    return(
        
        <section className="border-4 border-black container mx-auto">

            <h2 className="mb-2 font-mono underline">Showing Some Popular books</h2>

            <ul className="grid grid-cols-1">
                {/*--------------iterating and diaplying--------------------------*/}
                {popularBooks.map((book)=> 
                
                (

                 <li key={book.id} className="p-3 border-b-4">

                   <h3 className="text-md md:text-lg font-bold">{book.title}</h3>
                   <h4 className="text-sm font-light">{book.author}</h4>
                   <p className="text-sm md:text-md italic">{book.description}</p>

                   <div className="flex justify-center items-center gap-4">

                     <h5>Year: {book.publication_year}</h5>
                     
                     <button className="bg-purple-600 hover:bg-purple-400 text-white p-1  rounded-md font-semi-bold text-sm ">
                       <Link className="cursor-pointer py-2" to={`/book-details/${book.id}`}>view more</Link>
                     </button>

                   </div>
                
                </li>
                )

                )
                
                }
                
            </ul>
        
        </section>
      
    ) 
}

export default PopularBooks;