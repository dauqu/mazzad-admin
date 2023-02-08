// icons
import AutoAwesomeMosaicTwoToneIcon from "@mui/icons-material/AutoAwesomeMosaicTwoTone";
import ShoppingCartCheckoutTwoToneIcon from "@mui/icons-material/ShoppingCartCheckoutTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import PeopleTwoToneIcon from "@mui/icons-material/PeopleTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import DescriptionTwoToneIcon from "@mui/icons-material/DescriptionTwoTone";
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
    id: "18",
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
    id: "8",
    name: "Dashboard",
    icon: <PostAddTwoToneIcon />,
    url: "/",
  },
  {
    id: "9",
    name: "Deals",
    icon: <CopyAllTwoToneIcon />,
    url: "/deals",
  },
  {
    id: "10",
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
    id: "11",
    name: "Wallet",
    icon: <RadioButtonCheckedIcon />,
    url: "/wallet",
  },
  
  
  {
    id: "12",
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
    id: "13",
    name: "Points",
    icon: <StyleIcon />,
    url: "/points",
  },
  {
    id: "14",
    name: "Ads",
    icon: <ClassIcon />,
    url: "/classifications",
  },
  {
    id: "15",
    name: "Traders",
    icon: <SearchIcon />,
    url: "/traders",
  },
  {
    id: "16",
    name: "Jobs",
    icon: <ShoppingCartCheckoutTwoToneIcon />,
    url: "/jobs",
  },
 
  {
    id: "17",
    name: "Complaints",
    icon: <SupportAgentTwoToneIcon />,
    url: "/complaints",
  },
  
  {
    id: "18",
    name: "Chatbot Settings",
    icon: <SupportAgentTwoToneIcon />,
    url: "/settings",
  },
  {
    id: "header-5",
    name: "Settings",
    isheader: true
  },
  {
    id: "20",
    name: "Settings",
    icon: <SettingsTwoToneIcon />,
    url: "/settings",
  },
  {
    id: "21",
    name: "System Info",
    icon: <InfoTwoToneIcon />,
    url: "/settings",
  },
];

export default menu_items;
