import {createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "../../components/Home"
import App from "../../App"
import BrowseBooks from '../../components/BrowseBooks'; 
import BookDetails from '../../components/BookDetails'; 
import PageNotFound from "../../components/PageNotFound";
import AddBook    from "../../components/AddBook";

   const router = new createBrowserRouter([



      {
         path: '/',
         element: <App/>,

         children: [
            {
               index: true,
               element: <Home />,
            },
            

            {
               path: '/browse-books/:category',
               element: <BrowseBooks></BrowseBooks>,
            },

            {
               path: '/browse-books',
               element: <BrowseBooks></BrowseBooks>,
      
            },
            {
               path: '/book-details/:id',
               element: <BookDetails></BookDetails>,
            
            },
            {
               path: '/add-book',
               element: <AddBook></AddBook>,
            },
            
            {
               path: '*',
               element: <PageNotFound></PageNotFound>
            }
       
       
         ]
      
      },
      
      
   ])
    
const AppRouter = () => {
   return <RouterProvider router={router} />
}

export default AppRouter;