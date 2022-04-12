import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BecomeAPartner from "./Pages/AboutCompany/BecomeAPartner";
import ClientTestimonial from "./Pages/AboutCompany/ClientTestimonial";
import CoreTeam from "./Pages/AboutCompany/CoreTeam";
import EngagementModel from "./Pages/AboutCompany/EngagementModel";
import HowWeWork from "./Pages/AboutCompany/HowWeWork";
import OurCompany from "./Pages/AboutCompany/OurCompany";
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import AmazonWebServices from "./Pages/CloudServices/AmazonWebServices";
import AzureCloudServices from "./Pages/CloudServices/AzureCloudServices";
import DevOps from "./Pages/CloudServices/DevOps";
import GoogleAppEngineServices from "./Pages/CloudServices/GoogleAppEngineServices";
import ContactUs from "./Pages/ContactUs";
import AIandML from "./Pages/EmergingTechnology/AIandML";
import ARandVR from "./Pages/EmergingTechnology/ARandVR";
import AboutUs from "./Pages/AboutUs";
import BigData from "./Pages/EmergingTechnology/BigData";
import BlockChain from "./Pages/EmergingTechnology/BlockChain";
import IoT from "./Pages/EmergingTechnology/IoT";
import NFT from "./Pages/EmergingTechnology/NFT";
import HireAndroidDeveloper from "./Pages/HireDeveloper/HireAndroidDeveloper";
import HireDotNetDeveloper from "./Pages/HireDeveloper/HireDotNetDeveloper";
import HireFlutterDeveloper from "./Pages/HireDeveloper/HireFlutterDeveloper";
import HireFullStackDeveloper from "./Pages/HireDeveloper/HireFullStackDeveloper";
import HireIOSDeveloper from "./Pages/HireDeveloper/HireIOSDeveloper";
import HireKotlinDeveloper from "./Pages/HireDeveloper/HireKotlinDeveloper";
import HirePythonDeveloper from "./Pages/HireDeveloper/HirePythonDeveloper";
import HireReactNativeDeveloper from "./Pages/HireDeveloper/HireReactNativeDeveloper";
import Home from "./Pages/Home";
import AppStoreOptimization from "./Pages/Marketing/AppStoreOptimization";
import DigitalMarketing from "./Pages/Marketing/DigitalMarketing";
import PayPerClick from "./Pages/Marketing/PayPerClick";
import SearchEngineMarketing from "./Pages/Marketing/SearchEngineMarketing";
import SearchEngineOptimization from "./Pages/Marketing/SearchEngineOptimization";
import AndroidAppDevelopment from "./Pages/MobileAppDevelopment/AndroidAppDevelopment";
import ChatbotAppDevelopment from "./Pages/MobileAppDevelopment/ChatbotAppDevelopment";
import FlutterAppDevelopment from "./Pages/MobileAppDevelopment/FlutterAppDevelopment";
import IOSAppDevelopment from "./Pages/MobileAppDevelopment/IOSAppDevelopment";
import KotlinAppDevelopment from "./Pages/MobileAppDevelopment/KotlinAppDevelopment";
import ReactNativeAppDevelopment from "./Pages/MobileAppDevelopment/ReactNativeAppDevelopment";
import CustomSoftware from "./Pages/OtherServices/CustomSoftware";
import DataScienceAnalytics from "./Pages/OtherServices/DataScienceAnalytics";
import ExtendedRemoteTeam from "./Pages/OtherServices/ExtendedRemoteTeam";
import FullStackDevelopment from "./Pages/OtherServices/FullStackDevelopment";
import HireDedicatedDevelopmentTeam from "./Pages/OtherServices/HireDedicatedDevelopmentTeam";
import MVPDevelopment from "./Pages/OtherServices/MVPDevelopment";
import Portfolio from "./Pages/Portfolio";
import DotNet from "./Pages/Web Development/Backend/DotNet";
import Node from "./Pages/Web Development/Backend/Node";
import Python from "./Pages/Web Development/Backend/Python";
import Angular from "./Pages/Web Development/Frontend/Angular";
import HTML from "./Pages/Web Development/Frontend/HTML";
import JavaScript from "./Pages/Web Development/Frontend/JavaScript";
import ReactJS from "./Pages/Web Development/Frontend/ReactJS";
import Vue from "./Pages/Web Development/Frontend/Vue";
import WhyPragetX from "./Pages/WhyPragetX";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle';
import Footer from "./Components/Footer/Footer";
import BottomContactForm from "./Components/BottomContactForm/BottomContactForm";
import "./CSS/custom.css"


function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/WhyPragetX" element={<WhyPragetX />} />

        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route
          path="/AppStoreOptimization"
          element={<AppStoreOptimization />}
        />
        <Route path="/PayPerClick" element={<PayPerClick />} />
        <Route
          path="/SearchEngineMarketing"
          element={<SearchEngineMarketing />}
        />
        <Route
          path="/SearchEngineOptimization"
          element={<SearchEngineOptimization />}
        />

        <Route
          path="/AndroidAppDevelopment"
          element={<AndroidAppDevelopment />}
        />
        <Route
          path="/ChatbotAppDevelopment"
          element={<ChatbotAppDevelopment />}
        />
        <Route
          path="/FlutterAppDevelopment"
          element={<FlutterAppDevelopment />}
        />
        <Route path="/IOSAppDevelopment" element={<IOSAppDevelopment />} />
        <Route
          path="/KotlinAppDevelopment"
          element={<KotlinAppDevelopment />}
        />
        <Route
          path="/ReactNativeAppDevelopment"
          element={<ReactNativeAppDevelopment />}
        />

        <Route path="/CustomSoftware" element={<CustomSoftware />} />
        <Route
          path="/DataScienceAnalytics"
          element={<DataScienceAnalytics />}
        />
        <Route path="/ExtendedRemoteTeam" element={<ExtendedRemoteTeam />} />
        <Route
          path="/FullStackDevelopment"
          element={<FullStackDevelopment />}
        />
        <Route
          path="/HireDedicatedDevelopmentTeam"
          element={<HireDedicatedDevelopmentTeam />}
        />
        <Route path="/MVPDevelopment" element={<MVPDevelopment />} />

        <Route path="/CustomSoftware" element={<CustomSoftware />} />
        <Route
          path="/DataScienceAnalytics"
          element={<DataScienceAnalytics />}
        />
        <Route path="/ExtendedRemoteTeam" element={<ExtendedRemoteTeam />} />
        <Route
          path="/FullStackDevelopment"
          element={<FullStackDevelopment />}
        />
        <Route
          path="/HireDedicatedDevelopmentTeam"
          element={<HireDedicatedDevelopmentTeam />}
        />
        <Route path="/MVPDevelopment" element={<MVPDevelopment />} />

        <Route path="/DotNet" element={<DotNet />} />
        <Route path="/Node" element={<Node />} />
        <Route path="/Python" element={<Python />} />
        <Route path="/Angular" element={<Angular />} />
        <Route path="/HTML" element={<HTML />} />
        <Route path="/JavaScript" element={<JavaScript />} />
        <Route path="/ReactJS" element={<ReactJS />} />
        <Route path="/Vue" element={<Vue />} />

        <Route
          path="/HireAndroidDeveloper"
          element={<HireAndroidDeveloper />}
        />
        <Route path="/HireDotNetDeveloper" element={<HireDotNetDeveloper />} />
        <Route
          path="/HireFlutterDeveloper"
          element={<HireFlutterDeveloper />}
        />
        <Route
          path="/HireFullStackDeveloper"
          element={<HireFullStackDeveloper />}
        />
        <Route path="/HireIOSDeveloper" element={<HireIOSDeveloper />} />
        <Route path="/HireKotlinDeveloper" element={<HireKotlinDeveloper />} />
        <Route path="/HirePythonDeveloper" element={<HirePythonDeveloper />} />
        <Route
          path="/HireReactNativeDeveloper"
          element={<HireReactNativeDeveloper />}
        />

        <Route path="/AmazonWebServices" element={<AmazonWebServices />} />
        <Route path="/AzureCLoudServices" element={<AzureCloudServices />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route
          path="/GoogleAppEngineServices"
          element={<GoogleAppEngineServices />}
        />

        <Route path="/AIandML" element={<AIandML />} />
        <Route path="/ARandVR" element={<ARandVR />} />
        <Route path="/BigData" element={<BigData />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/BlockChain" element={<BlockChain />} />
        <Route path="/IoT" element={<IoT />} />
        <Route path="/NFT" element={<NFT />} />

        <Route path="/BecomeAPartner" element={<BecomeAPartner />} />
        <Route path="/ClientTestimonial" element={<ClientTestimonial />} />
        <Route path="/CoreTeam" element={<CoreTeam />} />
        <Route path="/EngagementModel" element={<EngagementModel />} />
        <Route path="/HowWeWork" element={<HowWeWork />} />
        <Route path="/OurCompany" element={<OurCompany />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
