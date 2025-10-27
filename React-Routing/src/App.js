import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

import AboutClass from "./pages/AboutClass";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDashBoard from "./pages/CourseDashBoard";
import LessonDashBoard from "./pages/LessonDashBoard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const About = lazy(()=>import("./pages/About"));
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "/",
        // element: <Body />,
        Component:Body,
      },
      {
        path: "/aboutclass",
        element: <AboutClass/>,
      },
      {
        path: "/about",
        element: <Suspense><About/></Suspense>, // fallback={<h1>Data Fetched</h1>}
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDashBoard />,
      },
      {
        path: "/courses/:courseId/lessons/:lessonId",
        element: <LessonDashBoard />,
      },
    ],
  },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/courses",
//     element: <Courses />,
//   },
//   {
//     path: "/courses/123",
//     element: <CourseDashBoard />,
//   },
//   {
//     path: "/courses/:courseId/lessons/:lessonId",
//     element: <LessonDashBoard />,
//   },
]);
document.title = "React Routing";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
