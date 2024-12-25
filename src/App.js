import {Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import AuthProvider from './hooks/Authprovider';

import './assets/scss/base.scss'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBudget from './pages/AddBudget';
import Expenses from './pages/Expenses';
import PrivateRoute from './components/PrivateRoute';
import Metrics from "./pages/Metrics";

function App() {

  const Layout = () => {
    return(
     <div className="main-layout">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
      
    </div> 
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [{
        path:"/",
        element: <Home />,
  
      },
      {
        path: "/add-budget",
        element: <AddBudget />
      },
      {
        path: "/expenses",
        element: <Expenses />
      },
      {
        path: "/metrics",
        element: <PrivateRoute>
                  <Metrics />
                  </PrivateRoute>
      }
      ]
    }
  ])

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
