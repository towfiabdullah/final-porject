import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Details from './components/Details/Details';
import PagetoRead from './components/PagetoRead/PagetoRead';
import MostRead from './components/MostRead/MostRead';
import ReviewPart from './components/ReviewPart/ReviewPart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listBook',
        element:<ListedBooks></ListedBooks>,
        loader: () => fetch('/Book.json'),

      },
      {
        path:'/readBook',
        element:<PagetoRead></PagetoRead>,
        loader: () => fetch('/Book.json'),
      },
      {
        path: "/details/:bookId",
        element: <Details></Details>,
        loader: () => fetch('/Book.json'),
      },
      {
        path:"/mostRead",
        element:<MostRead></MostRead>
      },
      {
        path:"/review",
        element:<ReviewPart></ReviewPart>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
