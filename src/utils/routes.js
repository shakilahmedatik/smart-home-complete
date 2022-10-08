import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Root from '../components/Root'
import About from '../components/About'
import ErrorPage from '../components/ErrorPage'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import { productsAndCartData } from '../loaders/getCart&ProductsData'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
    ],
  },
])

export default router
