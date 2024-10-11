import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AppRouter from './assets/utils/appRouter.jsx'

import { myStore  } from './store/store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(


  <StrictMode>
  
  <Provider store={myStore}>

      <AppRouter></AppRouter>

    </Provider>
    
  
  </StrictMode>
)
