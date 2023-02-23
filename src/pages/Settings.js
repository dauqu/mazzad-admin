import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import TabUnstyled from "@mui/base/TabUnstyled";
import Button from "@mui/material/Button";
import { Grid, MenuItem, Select } from "@mui/material";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
// import SMTP from "./settings/SMTP";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import Tabs from "@mui/material/Tabs";
// import Payment from "./settings/Payment";
import InsertPageBreakTwoToneIcon from "@mui/icons-material/InsertPageBreakTwoTone";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import VpnLockTwoToneIcon from "@mui/icons-material/VpnLockTwoTone";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import TranslateTwoToneIcon from "@mui/icons-material/TranslateTwoTone";
import Typography from "@mui/material/Typography";
import DnsTwoToneIcon from "@mui/icons-material/DnsTwoTone";
// import ServerDetails from "./settings/ServerDetails";
// import EmailTemplate from "./settings/EmailTemplate";
// import CORS from "./settings/CORS";
import TranslateIcon from "@mui/icons-material/Translate";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import { toast } from "react-toastify";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  // color: "#fff",
  // backgroundColor: "#1A2027",
}));

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

const Tab = styled(TabUnstyled)`
  color: "#333333";
  cursor: pointer;
  font-size: 0.875rem;
  width: 100%;
  padding: 6px 16px;
  margin: 6px 0px;
  border: none;
  display: flex;
  justify-content: left;
  outline: none;
`;

export default function CustomizedList() {
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [language, setLanguage] = React.useState();
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    // console.log(event.target.value);
  };

  const changeLanguage = (event) => {
    console.log(event.target.value);
    localStorage.setItem("language", language);
    toast.success("Language Changed Successfully");
    setTimeout(() => {
      window.location.reload();
    }, [1000]);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 3,
        boxShadow: 0,
        direction:
          localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
      }}
    >
      <TabsUnstyled defaultValue={0}>
        <TabsListUnstyled>
          <Grid container spacing={1} sx={{ marginBottom: 1 }}>
            {/* Top Area */}
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    boxShadow: 0,
                    // background: "#333333",
                  }}
                ></Button>
              </Item>
            </Grid>

            {/* Left Area */}
            <Grid item xs={2}>
              <Item sx={{ boxShadow: 0, maxWidth: 300 }}>
                <FireNav component="nav" disablePadding>
                  <Divider />
                  <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    sx={{ borderRight: 1 }}
                    centered
                    allowScrollButtonsMobile
                  >
                    <Tab sx={{}}>
                      <MarkEmailUnreadTwoToneIcon sx={{ marginRight: 1 }} />
                      SMTP
                    </Tab>
                    <Tab sx={{}}>
                      <InsertPageBreakTwoToneIcon
                        sx={{ marginRight: 1, ml: 2 }}
                      />
                      {localStorage.getItem("language") === "arabic"
                        ? "نموذج البريد الإلكتروني"
                        : "Email Template  "}
                    </Tab>
                    <Tab sx={{}}>
                      <PaymentTwoToneIcon sx={{ marginRight: 1 }} />
                      {localStorage.getItem("language") === "arabic"
                        ? "قسط"
                        : "Payment  "}
                    </Tab>
                    <Tab sx={{}}>
                      <VpnLockTwoToneIcon sx={{ marginRight: 1 }} />
                      {localStorage.getItem("language") === "arabic"
                        ? "مفاتيح ومفاتيح"
                        : "CORS"}
                    </Tab>
                    {/* <Tab sx={{ color: "#fff", background: "#1A2027" }}>
                      <AccessTimeTwoToneIcon sx={{ marginRight: 1 }} />
                      Timezone
                    </Tab>
                    <Tab sx={{ color: "#fff", background: "#1A2027" }}>
                      <TranslateTwoToneIcon sx={{ marginRight: 1 }} />
                      Languages
                    </Tab> */}
                    <Tab sx={{}}>
                      <DnsTwoToneIcon sx={{ marginRight: 1 }} />
                      {localStorage.getItem("language") === "arabic"
                        ? "تفاصيل الخادم"
                        : "Server Details"}
                    </Tab>
                    <Tab sx={{}}>
                      <TranslateIcon sx={{ marginRight: 1 }} />
                      {localStorage.getItem("language") === "arabic"
                        ? "تغيير اللغة"
                        : "Change Language"}
                    </Tab>
                  </Tabs>
                </FireNav>
              </Item>
            </Grid>
            <Grid item xs={10}>
              {/* Tabs Panel */}
              <Item sx={{ boxShadow: 0 }}>
                <TabPanelUnstyled value={0}>
                  {/* <SMTP /> */}
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mail
                  </Typography>
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                  {/* <EmailTemplate /> */}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                  {/* <Payment /> */}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={3}>{/* <CORS /> */}</TabPanelUnstyled>
                <TabPanelUnstyled value={4}>
                  {/* <ServerDetails /> */}
                </TabPanelUnstyled>
                <form onSubmit={() => changeLanguage()}>
                  <TabPanelUnstyled value={5}>
                    {/* language select drop down */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px 0px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          flexGrow: 1,
                          textAlign:
                            localStorage.getItem("language") === "arabic"
                              ? "right"
                              : "left",
                        }}
                      >
                        {localStorage.getItem("language") === "arabic"
                          ? "تغيير اللغة"
                          : "Change Language"}
                      </Typography>

                      <div>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ mr: 2, boxShadow: 0 }}
                          onClick={changeLanguage}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={language}
                      label="Language"
                      size="small"
                      onChange={handleLanguageChange}
                      style={{
                        width: "100%",
                      }}
                    >
                      <MenuItem value={"english"}>English</MenuItem>
                      <MenuItem value={"arabic"}>عربي</MenuItem>
                    </Select>
                  </TabPanelUnstyled>
                </form>
              </Item>
            </Grid>
          </Grid>
        </TabsListUnstyled>
      </TabsUnstyled>
    </Box>
  );
}
