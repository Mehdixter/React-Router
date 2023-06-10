import React from "react";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RouteLayout from "./layouts/RouteLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./pages/Careers";
import CareersLayout from "./layouts/CareersLayout";
import CareerDetails, { CareerDetailsLoader } from "./pages/CareerDetails";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpLayout/>}>
            <Route path="faq" element={<Faq/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Route>
          <Route path="careers" element={<CareersLayout/>}>
            <Route index element={<Careers/>} loader={careersLoader}/>
            <Route path=":id" element={<CareerDetails/>} loader={CareerDetailsLoader}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>

  )
)

function App() {
  return (

     <RouterProvider router={router}/>
  );
}

export default App;
