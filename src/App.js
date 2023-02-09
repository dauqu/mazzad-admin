
import "./App.css";
import MiniDrawer from "./components/Drawer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Storage from "./pages/Storage";
import Pages from "./pages/Pages";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Posts from "./pages/Posts";
import Bids from "./pages/Bids";
import Info from "./pages/Info";
import Bankaccount from "./pages/Bankaccount";
import Notifications from "./pages/Notifications";
import AddProduct from "./pages/AddProducts";
import AddPage from "./pages/AddPage";
import AddPost from "./pages/AddPost";
import Auctions from "./pages/Auctions";
import Points from "./pages/Points";
import Services from "./pages/Services";
import Offers from "./pages/Offers";
import Companies from "./pages/Companies";
import Commission from "./pages/Commission";
import Classifications from "./pages/Classifications";
import Search from "./pages/Search";
import NewCategory from "./pages/NewCategory";
import Invoice from "./pages/Invoice";
import axios from "axios";
import * as React from "react";
import Profile from "./pages/Profile";
import Contracts from "./pages/Contracts";
import Wallet from "./pages/Wallet";
import AddService from "./pages/AddService";

//Axios allow auth 
axios.defaults.withCredentials = true;


function App() {

  const navigate = useNavigate();

  //Check login
  async function checkLogin() {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login/check`).then((res) => {
      console.log(res);
      if (res.data.islogin !== true) {
        navigate("/login");
      }
    }).catch((e) => {
      console.log(e);
      navigate("/login");
    });
  }

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<MiniDrawer />}>
          <Route path="" element={<Dashboard />} />
          
          <Route path="/contracts" element={<Contracts />} />

          <Route path="/bank-account" element={<Bankaccount />} />
          {/* <Route path="/new-account" element={<AddProduct />} /> */}

          <Route path="/categories" element={<Categories />} />
          <Route path="/new-category" element={<NewCategory />} />

          <Route path="/products" element={<Products />} />
          <Route path="/new-product" element={<AddProduct />} />

          <Route path="/media" element={<Storage />} />

          <Route path="/pages" element={<Pages />} />
          <Route path="/new-page" element={<AddPage />} />

          <Route path="/tags" element={<Tags />} />
          <Route path="/new-tag" element={<AddProduct />} />

          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />

          <Route path="/posts" element={<Posts />} />
          <Route path="/new-post" element={<AddPost />} />

          <Route path="/orders" element={<Posts />} />

          <Route path="/invoice" element={<Invoice />} />

          <Route path="/bids" element={<Bids />} />

          <Route path="/info" element={<Info />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/auctions" element={<Auctions />} />
          <Route path="/points" element={<Points />} />

          <Route path="/services" element={<Services />} />
          <Route path="/add-service" element={<AddService />} />

          <Route path="/offers" element={<Offers />} />

          <Route path="/companies" element={<Companies />} />

          <Route path="/commission" element={<Commission />} />

          <Route path="/classifications" element={<Classifications />} />

          <Route path="/search" element={<Search />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />

          {/* 404 page */}
          <Route path="*" element={
            <div className="text-center" style={{
              marginTop: "20%",
              color: "white",
            }}>
              <h1 className="text-5xl font-bold">404</h1>
              <p className="text-2xl">Page not found</p>
            </div>
          } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
