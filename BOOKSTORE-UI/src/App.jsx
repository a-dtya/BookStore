import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import BookDetails from "./components/Book-Details/BookDetails";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer/footer";
import About from "./components/home-page/about/about-section";
import Contact from "./components/home-page/contact/contact-section";
import Home from "./components/home-page/home";
import Navbar from "./components/navbar/navbar";
import NotFound from "./components/not-found/not-found";
import OrderRoute from "./components/order/orderRoute";
import Shop from "./components/product-list/shop/shop";
import Trending from "./components/home-page/tranding/tranding-section";
import CLientZoneRouter from "./components/clientZone/CLientZoneRouter";
import Search from "./components/navbar/icons-comp/search-comp/search";
import Share from "./components/navbar/icons-comp/share-comp/share";
import Call from "./components/navbar/icons-comp/call-comp/call";
import ClientzoneLogin from "./components/clientZone/ClientZoneRegister/Clientzone-Login";
import ClientzoneRegister from "./components/clientZone/ClientZoneRegister/Clientzone-Register";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/layout";
import LangSwitch from "./components/navbar/icons-comp/lang-comp/lang";
import Categories from "./components/home-page/category/Categories";
import AuthorBooks from "./components/Book-Details/authorBooks/AuthorBooks";
import './index.css'
import Inventory from "./components/inventory/inventory"
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/store/:id" element={<Shop />} />
          <Route path="/details/:id" element={<BookDetails />} />
          <Route path="/authorBooks/:id" element={<AuthorBooks />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
         <Route path="/order" element={<OrderRoute />} />
         
          <Route path="/profile" element={<CLientZoneRouter />} />
          <Route path="login" element={<ClientzoneLogin />} />
          <Route path="/register" element={<ClientzoneRegister />} />
          <Route path="*" element={<NotFound />} />
          ///////////////////////////////////////////////////////////
          <Route path="/search" element={<Search />} />
          <Route path="/lang" element={<LangSwitch />} />
          <Route path="/share" element={<Share />} />
          <Route path="/call" element={<Call />} />
          <Route path="/inventory" element={<Inventory/>} />
        </Route>
      </Routes>
      
    </>
  );
}
