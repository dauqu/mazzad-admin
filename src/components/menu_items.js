// icons
import AutoAwesomeMosaicTwoToneIcon from "@mui/icons-material/AutoAwesomeMosaicTwoTone";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import PostAddTwoToneIcon from "@mui/icons-material/PostAddTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import CopyAllTwoToneIcon from "@mui/icons-material/CopyAllTwoTone";
import SdStorageTwoToneIcon from "@mui/icons-material/SdStorageTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PaymentsIcon from '@mui/icons-material/Payments';
import StyleIcon from '@mui/icons-material/Style';
import ClassIcon from '@mui/icons-material/Class';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const menu_items = [
  {
    id: "1",
    name: "Profile",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/profile",
  },
  {
    id: "2",
    name: "Tags",
    icon: <InfoTwoToneIcon />,
    url: "/tags",
  },
  {
    id: "header-1",
    name: "Work",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    isheader: true,
  },
  {
    id: "3",
    name: "Products Management",
    icon: <ShoppingBagTwoToneIcon />,
    url: "/products",
  },
  {
    id: "4",
    name: "Services Management",
    icon: <MiscellaneousServicesIcon />,
    url: "/services",
  },
  {
    id: "5",
    name: "Contracts",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/contracts",
  },
  {
    id: "6",
    name: "Files & Media",
    icon: <SdStorageTwoToneIcon />,
    url: "/media",
  },
  {
    id: "header-2",
    name: "Auction",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    isheader: true,
  },
  {
    id: "7",
    name: "Auctions",
    icon: <CategoryTwoToneIcon />,
    url: "/auctions",
  },
  {
    id: "8",
    name: "Company",
    icon: <CategoryTwoToneIcon />,
    url: "/companies",
  },
  {
    id: "header-2",
    name: "Report",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    isheader: true,
  },
  {
    id: "9",
    name: "Dashboard",
    icon: <PostAddTwoToneIcon />,
    url: "/",
  },
  {
    id: "10",
    name: "Deals",
    icon: <CopyAllTwoToneIcon />,
    url: "/deals",
  },
  {
    id: "11",
    name: "Offers Management",
    icon: <LocalOfferIcon />,
    url: "/offers",
  },
  {
    id: "header-3",
    name: "Wallets",
    icon: <ShoppingBagTwoToneIcon />,
    isheader: true
  },
  
  {
    id: "12",
    name: "Wallet",
    icon: <RadioButtonCheckedIcon />,
    url: "/wallet",
  },
  
  
  {
    id: "13",
    name: "Bank Account",
    icon: <ApartmentIcon />,
    url: "/bank-account",
  },
  {
    id: "header-4",
    name: "Loyality Points",
    icon: <PaymentsIcon />,
    isheader: true
  },
  {
    id: "14",
    name: "Points",
    icon: <StyleIcon />,
    url: "/points",
  },
  {
    id: "15",
    name: "Ads",
    icon: <ClassIcon />,
    url: "/classifications",
  },
  {
    id: "16",
    name: "Traders",
    icon: <SearchIcon />,
    url: "/traders",
  },
  {
    id: "17",
    name: "Jobs",
    icon: <ShoppingCartCheckoutTwoToneIcon />,
    url: "/jobs",
  },
 
  {
    id: "18",
    name: "Complaints",
    icon: <SupportAgentTwoToneIcon />,
    url: "/complaints",
  },
  
  {
    id: "19",
    name: "Chatbot Settings",
    icon: <SupportAgentTwoToneIcon />,
    url: "/chatbot-setting",
  },
  {
    id: "header-5",
    name: "Others",
    isheader: true
  },
  {
    id: "20",
    name: "Users",
    icon: <PersonIcon />,
    url: "/users",
  },
  {
    id: "header-6",
    name: "Settings",
    isheader: true
  },
  {
    id: "21",
    name: "Settings",
    icon: <SettingsTwoToneIcon />,
    url: "/settings",
  },
  {
    id: "22",
    name: "System Info",
    icon: <InfoTwoToneIcon />,
    url: "/system-info",
  },
];

export default menu_items;
