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
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PaymentsIcon from "@mui/icons-material/Payments";
import StyleIcon from "@mui/icons-material/Style";
import ClassIcon from "@mui/icons-material/Class";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const menu_items = [
  {
    name: "Ads Management",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/ads",
  },
  {
    name: "Comany Management",
    icon: <InfoTwoToneIcon />,
    url: "/companies",
  },
  {
    id: "header-1",
    name: "Work",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Auction",
    icon: <MiscellaneousServicesIcon />,
    url: "/auctions",
  },
  {
    name: "Rate",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/rate",
  },

  {
    name: "Opportunities",
    icon: <CategoryTwoToneIcon />,
    url: "/opportunities",
  },
  {
    name: "Report",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Refund",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    url: "/refund",
  },
  {
    name: "Blacklist",
    icon: <PostAddTwoToneIcon />,
    url: "/blacklist",
  },
  {
    name: "Complaints",
    icon: <CopyAllTwoToneIcon />,
    url: "/complaints",
  },

  {
    name: "Loyality Points",
    icon: <ShoppingBagTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Contracts",
    icon: <RadioButtonCheckedIcon />,
    url: "/contracts",
  },
  {
    name: "Sales",
    icon: <ApartmentIcon />,
    url: "/sales",
  },
  {
    name: "Tags",
    icon: <StyleIcon />,
    url: "/tags",
  },
  {
    id: "header-6",
    name: "Files Manager",
    isheader: true,
  },
  {
    id: "21",
    name: "All Files",
    icon: <SettingsTwoToneIcon />,
    url: "/file-manager",
  },
  {
    id: "22",
    name: "Upload Files",
    icon: <InfoTwoToneIcon />,
    url: "/upload-files",
  },
  {
    name: "Others",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Notifications",
    icon: <LocalOfferIcon />,
    url: "/notifications",
  },
  {
    name: "SMS",
    icon: <SearchIcon />,
    url: "/traders",
  },
  {
    name: "Email",
    icon: <ShoppingCartCheckoutTwoToneIcon />,
    url: "/sms",
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
    url: "/logs",
  },
  {
    id: "header-6",
    name: "Settings",
    isheader: true,
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
