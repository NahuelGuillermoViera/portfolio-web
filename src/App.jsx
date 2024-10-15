import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './app.scss'
//import pages
import Home from './pages/Home'
//import components
import Footer from './components/Footer'
import Header from "./components/Header";


const Layout = () => {
  return (
    
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
      
  )
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
    ]
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
