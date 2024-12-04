import {Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './assets/scss/base.scss'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBudget from './pages/AddBudget';

function App() {

  const Layout = () => {
    return(
     <div className="main-layout">
      <Navbar />
      <Outlet />
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
