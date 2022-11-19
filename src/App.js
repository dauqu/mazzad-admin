import logo from "./logo.svg";
import "./App.css";
import MiniDrawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
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
import Account from "./pages/Account";
import Notifications from "./pages/Notifications";
import AddProduct from "./pages/add-product";
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


//Axios allow auth 
// axios.defaults.withCredentials = true;


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MiniDrawer />}>
          <Route path="" element={<Dashboard />} />

          <Route path="/account" element={<Account />} />
          <Route path="/new-account" element={<AddProduct />} />

          <Route path="/categories" element={<Categories />} />
          <Route path="/new-category" element={<AddProduct />} />

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
          <Route path="/invoice" element={<Posts />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/info" element={<Info />} />
          <Route path="/notifications" element={<Notifications />} />

          <Route path="/auctions" element={<Auctions />} />
          <Route path="/points" element={<Points />} />

          <Route path="/services" element={<Services />} />

          <Route path="/offers" element={<Offers />} />

          <Route path="/companies" element={<Companies />} />

          <Route path="/commission" element={<Commission />} />

          <Route path="/classifications" element={<Classifications />} />

          <Route path="/search" element={<Search />} />

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
