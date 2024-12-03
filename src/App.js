import {Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './assets/scss/base.scss'

import Navbar from './components/Navbar';
import AddExpenses from './pages/AddExpenses';
import Home from './pages/Home';

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
        path: "/add-expenses",
        element: <AddExpenses />
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
