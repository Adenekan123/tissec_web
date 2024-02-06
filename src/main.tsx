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
import RedTeaming from "./pages/services/red-teaming";
import OurTestingProcess from "./pages/services/our-testing-process";
import ManagedEndpoint from "./pages/services/managed-endpoint";
import RetainedTesting from "./pages/services/retained-testing";
import CyberEssential from "./pages/services/cyber-essential";
import AwarenessTraining from "./pages/services/awareness-training";

import ContinuousVulnerabilityScanning from "./pages/services/continuous-vulnerability-scanning";
import ManagedDetectionResponse from "./pages/services/managed-detection-response";
import ThreatRiskAssessments from "./pages/services/threat-risk-assessments";
import PartneringWithUs from "./pages/who-we-are/partnering-with-us";


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
          <Route path="red-teaming" element={<RedTeaming/>}/>
          <Route path="our-testing-process" element={<OurTestingProcess/>}/>
          <Route path="managed-endpoint" element={<ManagedEndpoint/>}/>
          <Route path="retained-testing" element={<RetainedTesting/>}/>
          <Route path="cyber-essential" element={<CyberEssential/>}/>
          <Route path="awareness-training" element={<AwarenessTraining/>}/>
          <Route path="continuous-vulnerability-scanning" element={<ContinuousVulnerabilityScanning/>}/>
          <Route path="managed-detection-response" element={<ManagedDetectionResponse/>}/>
          <Route path="threat-risk-assessments" element={<ThreatRiskAssessments/>}/>
        </Route>
        
        <Route path="who-we-are">
          <Route path="about" element={<AboutUs />} />
          <Route path="location" element={<Location />} />
          <Route path="partnering-with-us" element={<PartneringWithUs />} />

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