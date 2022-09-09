import React from "react";
import "./App.css";
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

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/order" element={<Order />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/application" element={<Application />} />
          <Route path="/details" element={<Details />} />
          <Route path="/income" element={<Income />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/submit" element={<Close />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
