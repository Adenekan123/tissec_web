import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/pages/home";
import PenetrationTesting from "./components/pages/services/penetration-testing";
import EthicalPhishing from "./components/pages/services/ethical-phishing";
import AboutUs from "./components/pages/who-we-are/about";
import Location from "./components/pages/who-we-are/location";
import Contact from "./components/pages/contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />

        <Route path="services">
          <Route path="penetration-testing" element={<PenetrationTesting />} />
          <Route path="ethical-phishing" element={<EthicalPhishing />} />
          <Route path="ethical-phishing" element={<EthicalPhishing />} />
        </Route>
        
        <Route path="who-we-are">
          <Route path="about" element={<AboutUs />} />
          <Route path="location" element={<Location />} />
          <Route path="ethical-phishing" element={<EthicalPhishing />} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
