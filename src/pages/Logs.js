import React, { useEffect } from "react";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";

function TabPanel({ value, index, data, type, ...other }) {
  const [initData, setInitData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);

  useEffect(() => {
    let selectType = type;
    if (type === undefined || type === null || type === "") {
      selectType = "user";
    }
    const curr = data.filter((item) => item.type === selectType);
    setInitData(curr);
    setFilteredData(curr);
  }, [data, type]);

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(initData);
    else {
      const filteredData = initData.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filteredData);
    }
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "100%" }}>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-x-3">
            <input
              placeholder={
                localStorage.getItem("language") === "arabic" ? "بحث" : "Search"
              }
              onChange={(e) => {
                filterData(e.target.value);
              }}
              className="py-[7px] px-3 w-[300px] outline-none bg-white border-[1px]"
            />
            {/* <button className='bg-blue-400 px-4' type='submit'  >Search</button> */}
            <Button variant="contained" color="primary" type="submit">
              {localStorage.getItem("language") === "arabic"
                ? "يغلق"
                : " Close"}
            </Button>
          </form>
          {filteredData.map((item, index) => (
            <Stack
              direction="row"
              key={index}
              sx={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
                columnGap: "10px",
              }}
            >
              <div className="flex items-start gap-x-2">
                <Typography className="text-start" component="p">
                  {index + 1}
                </Typography>
                <Typography className="text-start" component="p">
                  {item.title}
                </Typography>
              </div>
              <Typography component="p">{item.createdAt}</Typography>
            </Stack>
          ))}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// const data = [
//   {
//     name: "Userdata: First text here for testing purpose only and nothing else to say.",
//     time: "10:05:51T11:10:30",
//     type: "user"
//   },
//   {
//     name: "WalletData: some text here for testing purpose only and nothing else to say.",
//     time: "10:05:51T11:10:80",
//     type: "wallet"
//   },
//   {
//     name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "deal"
//   },
//   {
//     name: "psum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "blacklist"
//   },
//   {
//     name: "abc text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "unfinished"
//   },
//   {
//     name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "complaint"
//   },
//   {
//     name: "sihy text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "refund"
//   },
//   {
//     name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
//     time: "10:05:51T11:10:30",
//     type: "user"
//   },
// ]

export default function Logs() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/logs`)
      .then((res) => {
        console.log(res.data);
        setData([...res.data.logs]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-4">
      {/* create switchable tabs */}
      <Box
        sx={{
          width: "100%",
          direction:
            localStorage.getItem("language") === "arabic" ? "rtl" : "ltr",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل دخول المستخدم"
                  : "user login Log "
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل المحفظة"
                  : "Wallet Log"
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل الصفقة"
                  : "Deal Log"
              }
              {...a11yProps(2)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل القائمة السوداء"
                  : "Blacklist Log"
              }
              {...a11yProps(3)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل الصفقات غير المكتملة"
                  : "Unfinished deal Log"
              }
              {...a11yProps(4)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل الشكاوى"
                  : "Complaint Log"
              }
              {...a11yProps(5)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل الاسترداد"
                  : "Refund Log"
              }
              {...a11yProps(6)}
            />
            <Tab
              label={
                localStorage.getItem("language") === "arabic"
                  ? "سجل المبيعات"
                  : "Sales Log"
              }
              {...a11yProps(7)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} data={data} type="user" />
        <TabPanel value={value} index={1} data={data} type="wallet" />
        <TabPanel value={value} index={2} data={data} type="deal" />
        <TabPanel value={value} index={3} data={data} type="blacklist" />
        <TabPanel value={value} index={4} data={data} type="unfinished" />
        <TabPanel value={value} index={5} data={data} type="complaint" />
        <TabPanel value={value} index={6} data={data} type="refund" />
        <TabPanel value={value} index={7} data={data} type="sales" />
      </Box>
    </div>
  );
}
