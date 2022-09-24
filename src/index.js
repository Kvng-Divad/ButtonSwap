import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { EmailContext } from "./Components/Detail/Context";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const root = createRoot(document.getElementById("root"));
const client = new QueryClient();

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <QueryClientProvider client={client}>
        <RecoilRoot>
          <EmailContext>
            <App />
          </EmailContext>
        </RecoilRoot>
      </QueryClientProvider>
    </ChakraProvider>
  </BrowserRouter>
);
