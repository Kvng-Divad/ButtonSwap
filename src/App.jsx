import React, { createContext, useContext, useEffect, useState } from "react";
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
import { useRecoilState } from "recoil";
import Dashboard from "./Routes/Dashboard";
import Payment from "./Routes/Payment";
import Agree from "./Routes/Agree";
import PaymentDetail from "./Routes/PaymentDetail";
import Headers from "./Routes/Headers";
import Signin from "./Routes/Signin";
import ApplicationSummary from "./Routes/ApplicationSummary";
import MyApplications from "./Routes/MyApplications";
import Profile from "./Routes/Profile";
import { toggleContext } from "./Context/Context";
import { authTokenState } from "./data/state";
import { useGetUser } from "./operations/user.operation";
import { useGetUserApplications } from "./operations/application.operation";
import { useGetSingleProduct } from "./operations/product.operation";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

function App() {
  const [expanded, setExpanded] = useState(false);
  const [token] = useRecoilState(authTokenState);
  const { getUser, getUserResult } = useGetUser();
  const { getUserApplications, getUserApplicationsResult } =
    useGetUserApplications();

  const { getSingleProduct, getSingleProductResult } = useGetSingleProduct();

  useEffect(() => {
    if (token) {
      getUser();
<<<<<<< HEAD
      getUserApplications().then((res) => {
=======
      getUserApplications().then(res => {
>>>>>>> d67a1c2f3415f50311b16434b41f1d8f69528f23
        if (res.data?.ok) {
          getSingleProduct(res?.data?.payload?.[0]?.product?.id);
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        getUserResult,
        getUserApplicationsResult,
        user: getUserResult?.data?.data?.payload,
        applications: getUserApplicationsResult?.data?.data?.payload,
        application: getUserApplicationsResult?.data?.data?.payload?.[0],
        product: getSingleProductResult?.data?.data?.data,
      }}
    >
      <toggleContext.Provider value={{ expanded, setExpanded }}>
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
            <Route path="/paymentdetail" element={<PaymentDetail />} />
            <Route path="/applications" element={<Payment />} />
            <Route path="/profile" element={<Payment />} />
            <Route path="/header" element={<Headers />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/appsummary" element={<ApplicationSummary />} />
            <Route path="/applications" element={<MyApplications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/agree" element={<Agree />} />
          </Routes>
        </div>
      </toggleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
