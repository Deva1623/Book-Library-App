
// import { useBooks } from "../assets/utils/BookContext";
import { Link, useParams,useNavigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import '../App.css';
import { useSelector } from "react-redux";

const BrowseBooks = () => {

    const {category} = useParams();                                        //extracting category from the url
    const navigate = useNavigate();
    
    
    const validCategories = ['Mystery', 'Fiction', 'Non-Fiction', 'Sci-Fi', 'Romance', 'Horror'];

    if(category){
      if(!validCategories.includes(category) ){
        navigate('/invalid');
      }
    }

    const AllBooks = useSelector((state)=>state.books.allBooks);             // getting all books Slice from the  redux store
    

    const [searchInput, setSearchInput] = useState("");                     // state to store search input
    const [filteredBooks, setFilteredBooks] = useState(AllBooks);           // state to store filtered records
   

    // hook runs when cateory or AllBooks changes in dependecy array-----------------
    useEffect(() => {
        
     

        if(category){
            //if category exist filter book by category
            const filterdByCateogy = AllBooks.filter((book)=>book.category.toLowerCase() === category.toLowerCase());
            setFilteredBooks(filterdByCateogy);
        }
        else{
           //if no category then we show all books
            setFilteredBooks(AllBooks);
        }


    }, [category, AllBooks]);
   
   //-------------------------------------------------------------------------------------- 

    const handleSearch = () => {
        let filtered = AllBooks; 
    
        //if search input is not empty
        if (searchInput.trim() !== "" && category !== '' ) {

          //filter by title author or category if selected
          filtered = filtered.filter(
            (book) =>
              (book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
              book.author.toLowerCase().includes(searchInput.toLowerCase()) ) &&
              (category ? book.category.toLowerCase() === category.toLowerCase() : true)
             
          );
        } 
        else {
          // if search input is empty, keeping category filter and show all matching books
          if (category) {
              filtered = AllBooks.filter((book) =>
              book.category.toLowerCase() === category.toLowerCase());
          } 
          else {
            filtered = AllBooks;
          }
        }

        setFilteredBooks(filtered);
      };

    //----------------------------------------------------------------
    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
    }


    return (
       <section className="container mx-auto">
    


          <div className="flex justify-center my-4 gap-2 items-baseline">
            <input onChange={(e) => setSearchInput(e.target.value)}  className="border border-black p-2 rounded-md" type='text' placeholder="Search by title or author"  ></input> 

            <button onClick={handleSearch} className=" bg-green-400 hover:bg-green-600 p-2 font-bold text-white rounded-md hover:rounded-full duration-300 ease-in-out   ">
              Search
            </button>

            <button onClick={scrollToBottom} className="bg-orange-500 z-50 opacity-60 text-white p-2 rounded-full fixed top-32 right-2 text-xs"><i className="fas fa-arrow-down mr-1"></i>Scroll to Bottom</button>
    
          </div>     



        <h4 className="text-lg font-semibold text-center block mt-4 ">
                {category && filteredBooks.length > 0 ? 
                (
                    <>
                        Showing results for category: <span className="font-bold bg-amber-200 p-1 rounded-full text-sm  md:text-lg">{category}</span>
                    </>
                ) : ""}
        </h4>


        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/*displaying from filtered books*/}
            {filteredBooks.length > 0? (
                
                
                filteredBooks.map( book=> (
                  
                    <div className="card-shadow p-4 m-4 rounded-lg flex flex-col justify-between gap-2 hover:shadow-2xl hover:shadow-blue-400 hover:border border-black hover:scale-105" key={book.id}>
                        <h2 className=" text-lg md:text-2xl font-bold underline">{book.title}</h2>
                        <p className="text-gray-700 text-md md:text-lg">{book.description}</p>
                        <p className="text-gray-700 font-mono">Category: <span className="bg-green-600  text-white font-bold  p-0.5 rounded-full">{book.category} </span></p>
                        <p className="text-gray-700 font-semibold">Author: {book.author}</p>
                        <p className="text-gray-700 ">Price: $ {book.price}</p>
                        <Link className="bg-teal-600 hover:bg-green-500 hover:scale-105 hover:rounded-md  w-24 text-center rounded-full md:p-2 p-1 mt-4 text-white font-semibold" to={`/book-details/${book.id}`}>View More </Link>
                    </div>
                )

            )) : (
                <div className="col-span-full flex justify-center items-center my-20 ">
                    <h1 className="text-4xl p-4 rounded-lg font-mono text-amber-600">Sorry, No Books Found</h1>
                </div>
                )
            }

        </div>
 
      </section>
    )
}

export  default BrowseBooks;