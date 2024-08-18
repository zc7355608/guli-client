import Login from '../pages/Login'
import Admin from '../pages/Admin'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Product from '../pages/Product'
import User from '../pages/User'
import Role from '../pages/Role'

const routes = [
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/',
    element: <Admin/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'category',
        element: <Category/>
      },
      {
        path: 'product',
        element: <Product/>
      },
      {
        path: 'user',
        element: <User/>
      },
      {
        path: 'role',
        element: <Role/>
      },
    ]
  },
]
export default routes