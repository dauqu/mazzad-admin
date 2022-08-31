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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MiniDrawer />}>
          <Route path="" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/orders" element={<Posts />} />
          <Route path="/invoice" element={<Posts />} />
          <Route path="/bids" element={<Bids />} />
          <Route path="/info" element={<Info />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
