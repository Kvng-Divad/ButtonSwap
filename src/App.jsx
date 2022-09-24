import React, {useState} from "react";
import "./App.css";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./Routes/Landing";
import Offers from "./Routes/Offers";
import Order from "./Routes/Order";
import Summary from "./Routes/Summary";
import Application from "./Routes/Application";
import Details from "./Routes/Details";
import Income from "./Routes/Income";
import Verification from "./Routes/Verification";
import Authentication from "./Routes/Authentication";
import Checkout from "./Routes/Checkout";
import Close from "./Routes/Close";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Dashboard from "./Routes/Dashboard";
import Payment from "./Routes/Payment";
import MyApplications from "./Routes/MyApplications";
import Profile from "./Routes/Profile";
import  {toggleContext} from './Context/Context'

const client = new QueryClient();



function App() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <QueryClientProvider client={client}>
      <toggleContext.Provider value={{expanded, setExpanded}}>
      <RecoilRoot>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/products" element={<Offers />} />
            <Route path="/products/:id" element={<Order />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/application" element={<Application />} />
            <Route path="/details" element={<Details />} />
            <Route path="/income" element={<Income />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/submit" element={<Close />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/applications" element={<MyApplications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </RecoilRoot>
      </toggleContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
