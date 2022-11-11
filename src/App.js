import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./components/routes/PrivateRoute";
import Home from "./components/Home/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        // {
        //   path: "/",
        //   // loader: () => fetch("https://ema-john-simple-simple-server.vercel.app/products"),
        //   element: <Home></Home>,
        // },

        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },

        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
