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
import Home from "./pages/home";
import Contact from "./pages/contact";
import PenetrationTesting from "./pages/services/penetration-testing";
import EthicalPhishing from "./pages/services/ethical-phishing";
import AboutUs from "./pages/who-we-are/about";
import Location from "./pages/who-we-are/location";
import RansomWareSimulation from "./pages/services/ransomware-simulation";
import ContinuousVulnerabilityScanning from "./pages/services/continuous-vulnerability-scanning";
import ManagedDetectionResponse from "./pages/services/managed-detection-response";
import ThreatRiskAssessments from "./pages/services/threat-risk-assessments";



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contact />} />

        <Route path="services">
          <Route path="penetration-testing" element={<PenetrationTesting />} />
          <Route path="ethical-phishing" element={<EthicalPhishing />} />
          <Route path="ransomware-simulation" element={<RansomWareSimulation />} />
          <Route path="continuous-vulnerability-scanning" element={<ContinuousVulnerabilityScanning />}/>
          <Route path="managed-detection-response" element={<ManagedDetectionResponse />}/>
          <Route path="threat-risk-assessments" element={<ThreatRiskAssessments />}/>

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
