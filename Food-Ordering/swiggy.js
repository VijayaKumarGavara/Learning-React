import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import AboutClass from "./AboutClass";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantInfo from "./RestaurantInfo";

const App = () => {
  return (
    <>
      
        <Header />
        <Outlet />
      
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <AboutClass name="Vijay" role="SDE" />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:restaurantId",
        Component: RestaurantInfo,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

document.title = "Food Ordering App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
