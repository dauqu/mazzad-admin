import React, { } from 'react'
import { Box, Button, OutlinedInput, Stack, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from 'prop-types';

function TabPanel({ value, index, data, ...other }) {
  const [filteredData, setFilteredData] = React.useState(data)
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setFilteredData(data);
    else {
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filteredData);
    }
  }

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
            <input placeholder="Search" 
            onChange={(e) => {
              filterData(e.target.value)
            }}
            className='py-[7px] px-3 w-[300px] outline-none bg-white border-[1px]' />
            {/* <button className='bg-blue-400 px-4' type='submit'  >Search</button> */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Close
            </Button>
          </form>
          {filteredData.map((item, index) => (
            <Stack
              direction="row"

              sx={{
                marginTop: "15px",
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: '10px',
              }} >
              <div className='flex items-start gap-x-2'>

                <Typography className='text-start' component="p">
                  {index + 1}
                </Typography>
                <Typography className='text-start' component="p">
                  {item.name}
                </Typography>
              </div>
              <Typography component="p">
                {item.time}
              </Typography>

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const data = [
  {
    name: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
  {
    name: "some text here for testing purpose only and nothing else to say.",
    time: "10:05:51T11:10:80"
  },
  {
    name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
]
const data2 = [
  {
    name: "psum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
  {
    name: "abc text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
  {
    name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
  {
    name: "sihy text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
  {
    name: "big text here for testing purpose only and nothing else to say. orem ipsum dolor sit amet consectetur adipisicing elit. orem ipsum dolor sit amet consectetur adipisicing elit.orem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "10:05:51T11:10:30"
  },
]

export default function Logs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-4">
      {/* create switchable tabs */}
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="user login Log" {...a11yProps(0)} />
            <Tab label="Wallet Log" {...a11yProps(1)} />
            <Tab label="Deal Log" {...a11yProps(2)} />
            <Tab label="Blacklist Log" {...a11yProps(3)} />
            <Tab label="Unfinished Deal Log" {...a11yProps(4)} />
            <Tab label="Active complaint Log" {...a11yProps(5)} />
            <Tab label="Active refund Log" {...a11yProps(6)} />
            <Tab label="Sales Log" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} data={data} />
        <TabPanel value={value} index={1} data={data2} />
        <TabPanel value={value} index={2} data={data} />
        <TabPanel value={value} index={3} data={data2} />
        <TabPanel value={value} index={4} data={data} />
        <TabPanel value={value} index={5} data={data2} />
        <TabPanel value={value} index={6} data={data} />
        <TabPanel value={value} index={7} data={data} />
      </Box>
    </div>
  );
}
