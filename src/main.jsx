import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Error } from './views';
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom';

const AppRouter = createBrowserRouter(
  createRoutesFromElements (
    <Route 
    path='/' 
    element= {<App />} 
    errorElement= {<Error />}
    />
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>,
)
