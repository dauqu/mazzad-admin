// icons
import AutoAwesomeMosaicTwoToneIcon from "@mui/icons-material/AutoAwesomeMosaicTwoTone";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ApartmentIcon from "@mui/icons-material/Apartment";
import StyleIcon from "@mui/icons-material/Style";
import PersonIcon from "@mui/icons-material/Person";
import {
  CompareArrows,
  DomainAddOutlined,
  EmailOutlined,
  HighlightTwoTone,
  History,
  InfoOutlined,
  LocalOfferOutlined,
  Memory,
  MessageOutlined,
  NotificationAddOutlined,
  NotInterested,
  PasswordOutlined,
  SettingsOutlined,
  SmsOutlined,
  StarBorderOutlined,
  UploadFileOutlined,
  Wallet,
  WalletOutlined,
} from "@mui/icons-material";

const menu_items = [
  {
    name: "Ads Management",
    icon: <HighlightTwoTone />,
    url: "/ads",
    arabic: "إدارة الإعلانات",
  },
  {
    name: "Company Management",
    icon: <DomainAddOutlined />,
    url: "/companies",
    arabic: "إدارة الشركات",
  },
  {
    id: "header-1",
    name: "Work",
    icon: <AutoAwesomeMosaicTwoToneIcon />,
    isheader: true,
    arabic: "العمل",
  },
  {
    name: "Auction",
    icon: <MiscellaneousServicesIcon />,
    url: "/auctions",
    arabic: "المزادات",
  },
  {
    name: "Rate",
    icon: <StarBorderOutlined />,
    url: "/rate",
    arabic: "معدل",
  },

  {
    name: "Opportunities",
    icon: <LocalOfferOutlined />,
    url: "/opportunities",
    arabic: "الفرص",
  },
  {
    name: "Report",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
    arabic: "تقرير",
  },
  {
    name: "Refund",
    icon: <History />,
    url: "/refund",
    arabic: "إعادة الأموال",
  },
  {
    name: "Blacklist",
    icon: <NotInterested />,
    url: "/blacklist",
    arabic: "القائمة السوداء",
  },
  {
    name: "Complaints",
    icon: <CompareArrows />,
    url: "/complaints",
    arabic: "الشكاوي",
  },

  {
    name: "Loyality Points",
    icon: <ShoppingBagTwoToneIcon />,
    isheader: true,
    arabic: "نقاط الولاء",
  },
  {
    name: "Contracts",
    icon: <RadioButtonCheckedIcon />,
    url: "/contracts",
    arabic: "العقود",
  },
  {
    name: "Sales",
    icon: <ApartmentIcon />,
    url: "/sales",
    arabic: "المبيعات",
  },
  {
    name: "Tags",
    icon: <StyleIcon />,
    url: "/tags",
    arabic: "العلامات",
  },
  {
    id: "header-6",
    name: "Files Manager",
    isheader: true,
    arabic: "مدير الملفات",
  },
  {
    name: "All Files",
    icon: <Memory />,
    url: "/file-manager",
    arabic: "جميع الملفات",
  },
  {
    name: "Upload Files",
    icon: <UploadFileOutlined />,
    url: "/add-file",
    arabic: "تحميل الملفات",
  },
  {
    name: "Others",
    icon: <CategoryTwoToneIcon />,
    isheader: true,
    arabic: "الآخرين",
  },
  {
    name: "Notifications",
    icon: <NotificationAddOutlined />,
    url: "/notifications",
    arabic: "الإشعارات",
  },
  {
    name: "Transactions History",
    icon: <WalletOutlined />,
    url: "/transactions-history",
    arabic: "سجل المعاملات",
  },
  {
    name: "SMS",
    icon: <MessageOutlined />,
    url: "/sms",
    arabic: "رسائل قصيرة",
  },
  {
    name: "Email",
    icon: <EmailOutlined />,
    url: "/email",
    arabic: "البريد الإلكتروني",
  },
  {
    name: "Users",
    icon: <PersonIcon />,
    url: "/users",
    arabic: "المستخدمين",
  },
  {
    name: "Logs",
    icon: <PasswordOutlined />,
    url: "/logs",
    arabic: "سجلات",
  },
  {
    id: "header-6",
    name: "Settings",
    isheader: true,
    arabic: "إعدادات",
  },
  {
    name: "Settings",
    icon: <SettingsOutlined />,
    url: "/settings",
    arabic: "إعدادات",
  },
  {
    name: "System Info",
    icon: <InfoOutlined />,
    url: "/system-info",
    arabic: "معلومات النظام",
  },
];

export default menu_items;
