import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Provider } from "react-redux";
import UserContext from "../utils/userContext";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ProductInfo from "./components/ProductInfo";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";
function App() {
  const [name, setName] = useState("default");

  useEffect(() => {
    const data = { username: "Vijaya Kumar Gavara" };
    setName(data.username);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userName: name, setName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/products/:productId",
        Component: ProductInfo,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
document.title = "E-Commerce";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
