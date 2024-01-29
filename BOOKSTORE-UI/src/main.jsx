import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./components/i18n/i18n.js";
import { AuthProvider } from "./context/authProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
   <React.Suspense fallback={<div style={{fontSize:'50px',paddingTop:'100px',textAlign:'center'}}>Loading...</div>}>
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </Provider>
    </React.Suspense>
  </BrowserRouter>

);


