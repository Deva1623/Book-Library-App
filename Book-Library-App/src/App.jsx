
import './App.css'
//-------------
import NavBar from './components/Navbar'
// import Home from './components/Home'
import { Outlet, BrowserRouter as Router} from 'react-router-dom'
// import { BooksProvider } from './assets/utils/BookContext'
// import AppRouter from './AppRouter';


function App() {



  return (
    
    <>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </>

    
  )
}

export default App
