import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Shared/Main';
import CategoryDetails from './Shared/Home/CategoryDetails';
import NewsLayout from './Shared/NewsDetails/NewsLayout';
import News from './Shared/NewsDetails/News';
import Login from './Shared/Verifying/Login';
import Register from './Shared/Verifying/Register';
import Context from './AuthProvider/Context';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<CategoryDetails></CategoryDetails>,
        loader:()=>fetch(`http://localhost:5000/news/`)
      },
      {
        path:'/category/:id',
        element: <CategoryDetails></CategoryDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>,
  },
  {
    path:'/register',
    element:<Register></Register>,
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <News></News>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={router}/>
    </Context>
  </React.StrictMode>,
)
