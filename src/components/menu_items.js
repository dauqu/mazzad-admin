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
    name: "Ads Management",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/add-management",
  },
  {
    name: "Comany Management",
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
    name: "User",
    icon: <ShoppingBagTwoToneIcon />,
    url: "/products",
  },
  {
    name: "Auction",
    icon: <MiscellaneousServicesIcon />,
    url: "/services",
  },
  {
    name: "Rate",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/contracts",
  },
 
  {
    name: "Opportunities",
    icon: <CategoryTwoToneIcon />,
    url: "/auctions",
  },
  {
    name: "Report",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Refund",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/companies",
  },
  {
    name: "Blacklist",
    icon: <PostAddTwoToneIcon />,
    url: "/",
  },
  {
    name: "Complaints",
    icon: <CopyAllTwoToneIcon />,
    url: "/deals",
  },
  
  {
    name: "Loyality Points",
    icon: <ShoppingBagTwoToneIcon />,
    isheader: true
  },

  {
    name: "Contracts",
    icon: <RadioButtonCheckedIcon />,
    url: "/contracts",
  },


  {
    name: "Sales",
    icon: <ApartmentIcon />,
    url: "/bank-account",
  },
  {
    name: "Tags",
    icon: <StyleIcon />,
    url: "/points",
  },
  {
    name: "Contries",
    icon: <ClassIcon />,
    url: "/classifications",
  },

  {
    name: "Others",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Notifications",
    icon: <LocalOfferIcon />,
    url: "/offers",
  },

  {
    name: "SMS",
    icon: <SearchIcon />,
    url: "/traders",
  },
  {
    name: "Email",
    icon: <ShoppingCartCheckoutTwoToneIcon />,
    url: "/jobs",
  },
  {
    id: "20",
    name: "Users",
    icon: <PersonIcon />,
    url: "/users",
  },
  {
    name: "Logs",
    icon: <SdStorageTwoToneIcon />,
    url: "/media",
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
