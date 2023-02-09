import * as React from "react";
import Box from "@mui/material/Box";


import PeopleIcon from '@mui/icons-material/People';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


export const doughnut_data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dashboard() {

  return (
    <Box
      sx={{
        // backgroundColor: "rgb(247, 250, 252)",
        width: "100%",
        marginTop: 3,
        boxShadow: 0,
        animation: "fadeIn 0.5s ease-in-out",
        transition: "box-shadow 1s ease-in-out",
      }}
    >
      <div className="p-6 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 xl:gap-6 lg:gap-6 md:gap-4 sm:gap-3">

        <div className="report-card flex flex-col w-full" >
          <div className="card w-full">
            <div className="card-body border p-5 flex bg-white flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <PeopleIcon sx={{
                  fontSize: 28,
                }} className={"text-indigo-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-teal-400 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8 self-start text-start">
                <h1 className="font-black text-[28px] num-4 text-3xl">51,234</h1>
                <p className="capitalize text-gray-400 font-bold">Total active users</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card flex flex-col w-full" >
          <div className="card w-full">
            <div className="card-body border p-5 flex bg-white flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <PersonOffIcon sx={{
                  fontSize: 28,
                }} className={"text-orange-700"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-orange-600 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8 self-start text-start">
                <h1 className="font-black text-[28px] num-4 text-3xl">1,234</h1>
                <p className="capitalize text-gray-400 font-bold">Total inactive users</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>


        <div className="report-card flex flex-col w-full" >
          <div className="card w-full">
            <div className="card-body border p-5 flex bg-white flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <CategoryIcon sx={{
                  fontSize: 28,
                }} className={"text-yellow-400"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-yellow-600 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8 self-start text-start">
                <h1 className="font-black text-[28px] num-4 text-3xl">2,544</h1>
                <p className="capitalize text-gray-400 font-bold">Upcoming Products</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

        <div className="report-card flex flex-col w-full" >
          <div className="card w-full">
            <div className="card-body border p-5 flex bg-white flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <InventoryIcon sx={{
                  fontSize: 28,
                }} className={"text-violet-400"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-violet-600 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8 self-start text-start">
                <h1 className="font-black text-[28px] num-4 text-3xl">1,544</h1>
                <p className="capitalize text-gray-400 font-bold">Complete Products</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>


        <div className="report-card flex flex-col w-full" >
          <div className="card w-full">
            <div className="card-body border p-5 flex bg-white flex-col w-full">
              <div className="flex flex-row justify-between items-center">
                <StoreIcon sx={{
                  fontSize: 28,
                }} className={"text-sky-400"} />
                <span className="rounded-full px-3 py-2 text-white badge bg-sky-600 text-xs">
                  12%
                  <i className="fal fa-chevron-up ml-1"></i>
                </span>
              </div>

              <div className="mt-8 self-start text-start">
                <h1 className="font-black text-[28px] num-4 text-3xl">1,080</h1>
                <p className="capitalize text-gray-400 font-bold">Vendors</p>
              </div>
            </div>
          </div>
          <div className="footer bg-white p-1 mx-4 border border-t-0 rounded rounded-t-none"></div>
        </div>

      </div>

      <div className="w-full p-4 flex flex-row justify-evenly gap-x-4 items-center mt-8">
        <div className="flex flex-row justify-center items-center w-[50%] h-[400px]">
          <Line options={options} data={data} />
        </div>
        
        <div className="flex flex-row justify-center items-center w-[50%] h-[400px] py-[55px] ">
                <Doughnut data={doughnut_data} />
        </div>
        
      </div>
    </Box>
  );
}
