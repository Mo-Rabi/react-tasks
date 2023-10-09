import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Artist from "./components/Artist/Artist";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "artist", element: <Artist /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
