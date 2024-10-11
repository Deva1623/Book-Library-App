
import { Link, useParams } from "react-router-dom";
// import {useBooks} from "../assets/utils/BookContext"
import '../App.css';
import { useSelector } from "react-redux";


function BookDetails (){

    const {id} = useParams();      //extracting id from url of selected book
    
   
    const AllBooks = useSelector((state)=> state.books.allBooks);                   //getting all books from the store
    const popularBooks = useSelector((state)=> state.popularBooks.popular);         //getting popular books from the store

    

    const selectedBook  = AllBooks.find((book)=> book.id === parseInt(id) );        //finding the book with the id
    const popularBook  = popularBooks.find((book)=> book.id === parseInt(id) );     //finding the book with the id
   
    
    const bookToFind = selectedBook || popularBook;                                //book will be found in either of the two
    
    
   return (
    bookToFind? (
        
        <section className="container mx-auto py-5">

            <div className="grid md:grid-cols-2 grid-cols-1 my-20">

                <div className=" p-4  flex justify-center  ">
                    <img className="border-4 border-gray-800 h-96 w-96 rounded-lg hover:shadow-xl hover:shadow-gray-500 shadow-lg mb-2 hover:scale-105  duration-500 ease-in-out" src={selectedBook ? selectedBook.cover_image : popularBook.cover_image}></img>
                </div>

                <div className=" flex flex-col justify-center items-center border-2 p-4 shadow-2xl">
                 
                 <h1 className="font-bold text-xl md:text-3xl lg:text-4xl mb-2 underline font-[Merriweather]">{bookToFind.title}</h1>
                 <h3 className="text-blue-500  font-semibold mb-2 font-[Poppins]">Year-{bookToFind.publication_year}</h3>
                 <h3 className="font-semibold mb-2">By {bookToFind.author}</h3>
                 <span className="bg-black px-1 rounded font-bold text-yellow-200 mb-6 font-[Poppins]">{bookToFind.category}</span>
                 <p className="text-sm md:text-lg lg:text-2xl  text-center font-[Poppins]">{bookToFind.description}</p>   
                 <h4 className="text-2xl font-bold text-center my-4 text-green-600 font-[Poppins]">${bookToFind.price}</h4>
                 <h4 className="text-center text-xl font-semibold mb-2"><i className="fas fa-star text-yellow-400 text-xl "></i>{bookToFind.rating}</h4>
                
                 <div className="flex justify-around">
                    <button className="bg-orange-700 text-sm md:text-md text-white font-bold px-4 py-2 rounded-lg m-2 font-[Poppins] hover:-translate-y-1 hover:bg-orange-500"><i className="fas fa-heart mr-2"></i>Add to favourites</button>
                    <button className="bg-blue-600  text-sm md:text-md text-white font-bold px-4 py-2 rounded-lg m-2 font-[Poppins] hover:-translate-y-1 hover:bg-blue-400"><i className="fas fa-shopping-cart mr-2"></i>Add to cart</button>
                 </div>

                </div>

            <button className="back-browse-btn shadow-md bg-emerald-700 text-white w-28 mx-auto rounded mt-5 md:mt-0 p-3 font-md font-bold text-sm hover:translate-x-2"><Link className=" py-2" to='/browse-books'> <i className="fas fa-arrow-left"></i> Back to Browse</Link></button>
            
            </div>
            
        </section>
    ):(
        <div className="flex justify-center items-center h-screen">
            <h1 className=" text-4xl font-bold text-center font-mono text-amber-800">Book not found</h1>
        </div>
    )
   )
}

export default BookDetails;