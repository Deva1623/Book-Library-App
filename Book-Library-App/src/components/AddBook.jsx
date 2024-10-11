

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/bookSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function AddBook() {
    

    const dispatch= useDispatch();                                    //for dispatching to redux store
    const allBooks = useSelector((state)=> state.books);              // for geeting book slice from store


    const navigate = useNavigate();                                  // for navigation to other component
    
    const [newBook, setNewBook] = useState({                         //new book object intially empty

        id: '',
        title: "",
        author: "",
        publication_year: "",
        category: "",
        description: "",
        cover_image: "",
        rating: "",
        price: ""
    });
    
    function handleEachChange(e){
        setNewBook({...newBook, [e.target.name]: e.target.value})    //for updating newBook with each change in input field
    }
     

    const[error, setError] = useState( {} );                       //for handling for errors

    function formValidation(bookObject){

        const errorObj = {};                                      //this object holds errors in form

        if(newBook.title === ''){errorObj.title = 'Title required'}
        if(newBook.author === ''){errorObj.author = 'Author name required';}
        if(newBook.publication_year === ''){errorObj.publication_year = 'Publication year required 1800-2024';}
        if(newBook.category === ''){errorObj.category = 'Category required';}
        if(newBook.description === ''){errorObj.description = 'Description required';}
        if(newBook.rating === ''){ errorObj.rating = 'Rating required';}
        if(newBook.price === ''){errorObj.price = 'Price required';}

        return errorObj;
    }

    function handleSubmit(e){
      
      e.preventDefault();
     
      // form validation before submitting
      const allErrors = formValidation(newBook);           
      let numberOfErrors = Object.keys(allErrors).length;        // if any error  
      
      if(numberOfErrors > 0){
        setError(allErrors);                                    //showing error in form
        return;
      }
      
      
      setError({})                                             //if no error removing old errors

      const newBookId = allBooks.allBooks.length + 1;        

      dispatch(addBook({...newBook, id: newBookId}));          //dispatching new book to store
      

      navigate('/browse-books')                               //navigating to browse books page
 

       setNewBook({                                           //reset form after submitting
        id: '',
        title: "",
        author: "",
        publication_year: "",
        category: "",
        description: "",
        cover_image: "",
        rating: "",
        price: ""
       })
       
    }
    
        return (
        <section className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-6 h-screen">
            
            <div className="flex justify-center items-center gap-2">

                <img className="lg:w-36 md:w-28 w-12 m-4 h-auto" src='src\assets\utils\images\books.webp'></img>
                <i className="fas fa-add text-4xl"></i>
                <img className="lg:w-40 md:w-32 w-16 h-auto" src='src\assets\utils\images\brain.png'></img>
            
            </div>

             {/*-----form on add books page----*/}
            <form  onSubmit={handleSubmit} className="p-6 w-80 md:w-96 border-4 border-gray-400 flex flex-col justify-center items-center rounded-lg gap-2">
                
                <h1 className="bg-green-200 rounded-full p-1 font-bold font-mono mb-2"><i className="fas fa-add mr-1 text-blue-500"></i>Add More Books Here</h1>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-book mr-1 text-amber-500"></i>Title</label>
                  <input className="w-full border border-black  rounded-lg " type='text' placeholder="Enter title" name='title' value={newBook.title} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.title}</span>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-user mr-1 text-blue-500"></i>Author</label>
                  <input className="w-full border border-black  rounded-lg" type="text" placeholder="Enter author name" name="author" value={newBook.author} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.author}</span>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-calendar-alt mr-1 text-purple-500"></i>Publication Year</label>
                  <input className="w-full border border-black rounded-lg" type="number" max='2024' min='1800'  maxLength={4} placeholder="Enter a year between 1800-2024"  name="publication_year" value={newBook.publication_year} onChange={handleEachChange}></input>
                {  error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.publication_year}</span>}
                </div>
                
                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-tag mr-1 text-teal-500"></i>Category</label>
                  <input className="w-full border border-black rounded-lg" type="text" placeholder="Enter category" name="category" value={newBook.category} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.category}</span>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-info-circle mr-1 text-orange-500"></i>Description</label>
                  <input className="w-full border border-black  rounded-lg" type="text" placeholder="Enter about" name="description" value={newBook.description} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.description}</span>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"> <i className="fas fa-image mr-1 text-pink-500"></i>Cover Image URL (optional)</label>
                  <input className="w-full border border-black rounded-lg" type="text" placeholder="Enter image URL" name="cover_image" value={newBook.cover_image} onChange={handleEachChange}></input>
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-star mr-1 text-yellow-500"></i>Rating (1-5)</label>
                  <input className="w-full border border-black  rounded-lg" type="number" placeholder="Enter ratings" min={0} max={5} name="rating" value={newBook.rating} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.author}</span>}
                </div>

                <div className="w-full">
                  <label className="block text-sm font-medium"><i className="fas fa-dollar-sign mr-1 text-green-500"></i>Price (₹)</label>
                  <input className="w-full border border-black  rounded-lg mb-2" type="number" placeholder="Enter price"  min={0} name="price" value={newBook.price} onChange={handleEachChange}></input>
                  {error && <span className="text-yellow-600 bg-amber-100 text-xs">{error.price}</span>}
                </div>
                
                <div>
                    <button className="text-sm md:text-md bg-blue-800 hover:bg-blue-400 hover:-translate-y-2 duration-500  text-white px-4 py-2 rounded-md font-bold" type="submit">ADD BOOK</button>
                </div>
                
            </form>

        </section>    
        )
}

export default AddBook;