import MiniDrawer from "./components/Drawer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
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
import Profile from "./pages/Profile";
import Contracts from "./pages/Contracts";
import Wallet from "./pages/Wallet";
import AddService from "./pages/AddService";
import AddContract from "./pages/AddContract";
import AdsManagement from "./pages/AdsManagement";
import FileManager from "./pages/FileManager";
import RateManagement from "./pages/RateManagement";
import Opportunities from "./pages/Opportunities";
import Refund from "./pages/Refund";
import Complaints from "./pages/Complaints";
import Sales from "./pages/Sales";
import Logs from "./pages/Logs";
import AddCompany from "./pages/AddCompany";
import AddAuction from "./pages/AddAuction";
import AddComplaints from "./pages/AddComplaints";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Button } from "@mui/material";
import AddRefund from "./pages/AddRefund";
import Systeminfo from "./pages/Systeminfo";
import Email from "./pages/Email";
import SMS from "./pages/SMS";
import TransactionHistory from "./pages/TransactionHistory";
import BlackList from "./pages/BlackList";

// loading
import Loading from "./components/Loading";
import AddFile from "./pages/AddFile";
import { ToastContainer } from "react-toastify";

//Axios allow auth
// axios.defaults.withCredentials = true;

function App() {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);

  //Check login
  async function checkLogin() {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/login/check`,
        {},
        {
          headers: {
            "x-access-token": token,
          },
        }
      )
      .then((res) => {
        if (res.data.islogin !== true) {
          navigate("/login");
        }
      })
      .catch((e) => {
        navigate("/login");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }

  React.useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loading height={150} width={150} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<MiniDrawer />}>
              <Route path="" element={<Dashboard />} />

              <Route path="/ads" element={<AdsManagement />} />

              <Route path="/rate" element={<RateManagement />} />
              <Route path="/opportunities" element={<Opportunities />} />

              <Route path="/contracts" element={<Contracts />} />
              <Route path="/edit-contract/:id" element={<AddContract />} />

              <Route path="/complaints" element={<Complaints />} />
              <Route path="/edit-complaint/:id" element={<AddComplaints />} />

              <Route path="/blacklist" element={<BlackList />} />

              <Route path="/sales" element={<Sales />} />

              <Route path="/bank-account" element={<Bankaccount />} />

              <Route path="/refund" element={<Refund />} />
              <Route path="/edit-refund/:id" element={<AddRefund />} />

              <Route path="/categories" element={<Categories />} />
              <Route path="/new-category" element={<NewCategory />} />

              <Route path="/products" element={<Products />} />
              <Route path="/new-product" element={<AddProduct />} />

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

              <Route path="/file-manager" element={<FileManager />} />
              <Route path="/add-file" element={<AddFile />} />

              <Route path="/auctions" element={<Auctions />} />
              <Route path="/edit-auction/:id" element={<AddAuction />} />

              <Route path="/points" element={<Points />} />

              <Route path="/services" element={<Services />} />
              <Route path="/add-service" element={<AddService />} />

              <Route path="/offers" element={<Offers />} />

              <Route path="/companies" element={<Companies />} />
              <Route path="/edit-company/:id" element={<AddCompany />} />

              <Route path="/commission" element={<Commission />} />

              <Route path="/classifications" element={<Classifications />} />

              <Route path="/search" element={<Search />} />

              <Route path="/profile" element={<Profile />} />
              <Route path="/wallet" element={<Wallet />} />

              <Route
                path="/transactions-history"
                element={<TransactionHistory />}
              />

              <Route path="/logs" element={<Logs />} />

              <Route path="/email" element={<Email />} />

              <Route path="/sms" element={<SMS />} />

              <Route path="/system-info" element={<Systeminfo />} />
            </Route>
            <Route
              path="*"
              element={
                <div className="text-center w-full h-screen flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-bold">404</h1>
                  <p className="text-2xl mt-2 mb-1">Page not found</p>
                  <Link to={"/"}>
                    <Button variant="contained" color="secondary">
                      Go Home
                    </Button>
                  </Link>
                </div>
              }
            />
          </Routes>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
