import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./Components/navbar/Navbar";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/footer/Footer";
import Login from "./pages/login/Login";
import './styles/global.scss'
import Product from "./Components/product/Product";
import User from "./Components/user/User";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="container_menu">
            <Menu />
          </div>
          <div className="container_content">
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        { path: "/users", element: <Users /> },
        { path: "/product/:id", element: <Product /> },
        { path: "/user/:id", element: <User /> },
      ],
    },
    {
      path: "/login",
      element: <Login />
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
