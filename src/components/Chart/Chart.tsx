'use client';

import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { Booking } from '@/models/booking';

ChartJS.register(Tooltip, CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

type Props = {
  userBookings: Booking[];
};

const Chart: FC<Props> = ({ userBookings }) => {
  const labels = userBookings.map((booking) => booking.hotelRoom.name);
  const amountSpend = userBookings.map((booking) => booking.totalPrice);

  return <Bar options={options} data={{
    labels,
    datasets: [
      {
        label: "Amount spent",
        data: amountSpend,
        borderWidth: 1,
        backgroundColor: "#F27405",
        hoverBackgroundColor: "#F2C641"
      }
    ]
  }}/>;
};

export default Chart;
