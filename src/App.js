import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage, ProductDetail, Products, RootLayout } from "./pages";
import Home from "./pages/home";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      }
    ]
  },

])

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
