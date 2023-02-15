// icons
import AutoAwesomeMosaicTwoToneIcon from "@mui/icons-material/AutoAwesomeMosaicTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StyleIcon from "@mui/icons-material/Style";
import PersonIcon from "@mui/icons-material/Person";
import { CompareArrows, DomainAddOutlined, EmailOutlined, HighlightTwoTone, History, InfoOutlined, LocalOfferOutlined, Memory, MessageOutlined, NotificationAddOutlined, NotInterested, PasswordOutlined, SettingsOutlined, SmsOutlined, StarBorderOutlined, UploadFileOutlined, Wallet, WalletOutlined } from "@mui/icons-material";

const menu_items = [
  {
    name: "Ads Management",
    icon: <HighlightTwoTone />,
    url: "/ads",
  },
  {
    name: "Company Management",
    icon: <DomainAddOutlined />,
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
    icon: <StarBorderOutlined />,
    url: "/rate",
  },

  {
    name: "Opportunities",
    icon: <LocalOfferOutlined />,
    url: "/opportunities",
  },
  {
    name: "Report",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Refund",
    icon: <History />,
    url: "/refund",
  },
  {
    name: "Blacklist",
    icon: <NotInterested />,
    url: "/blacklist",
  },
  {
    name: "Complaints",
    icon: <CompareArrows />,
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
    name: "All Files",
    icon: <Memory />,
    url: "/file-manager",
  },
  {
    name: "Upload Files",
    icon: <UploadFileOutlined />,
    url: "/add-file",
  },
  {
    name: "Others",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
  },
  {
    name: "Notifications",
    icon: <NotificationAddOutlined />,
    url: "/notifications",
  },
  {
    name: "Transactions History",
    icon: <WalletOutlined />,
    url: "/transactions-history",
  },
  {
    name: "SMS",
    icon: <MessageOutlined />,
    url: "/sms",
  },
  {
    name: "Email",
    icon: <EmailOutlined />,
    url: "/email",
  },
  {
    name: "Users",
    icon: <PersonIcon />,
    url: "/users",
  },
  {
    name: "Logs",
    icon: <PasswordOutlined />,
    url: "/logs",
  },
  {
    id: "header-6",
    name: "Settings",
    isheader: true,
  },
  {
    name: "Settings",
    icon: <SettingsOutlined />,
    url: "/settings",
  },
  {
    name: "System Info",
    icon: <InfoOutlined />,
    url: "/system-info",
  },
];

export default menu_items;
