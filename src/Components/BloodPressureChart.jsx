import { ChevronDown, ChevronUp } from "lucide-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
);

const BloodPressureChart = ({ data = [] }) => {
  const labels = data?.map((item) => `${item.month.slice(0, 3)}, ${item.year}`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: data.map((item) => item.blood_pressure.systolic.value),
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#E66FD2",
      },
      {
        label: "Diastolic",
        data: data.map((item) => item.blood_pressure.diastolic.value),
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#7E6CAB",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#ddd",
        borderWidth: 1,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
          font: {
            size: window.innerWidth < 768 ? 12 : 14,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#555",
          font: {
            size: window.innerWidth < 768 ? 12 : 14,
          },
        },
        grid: {
          color: "#e5e5e5",
        },
      },
    },
  };

  return (
    <div className="bg-[#F4F0FE] rounded-2xl md:p-4 p-2 flex w-full h-full overflow-hidden gap-4 flex-col md:flex-row justify-center">
      <div className="flex w-full gap-12 flex-col">
        <div className="flex justify-between items-center md:w-full">
          <h2 className="font-bold text-lg">Blood Pressure</h2>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <p>Last 6 months</p>
            <ChevronDown size={16} />
          </div>
        </div>

        <div className="md:h-46.5 md:w-full h-59">
          <Line data={chartData} options={options} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3 w-52">
        <div>
          <div className="flex gap-2.5 items-center mb-2">
            <div className="bg-[#E66FD2] w-3.5 h-3.5 rounded-full"></div>
            <h3 className="text-sm text-black font-medium">Systolic</h3>
          </div>
          <p className="text-xl font-bold">
            {data[data.length - 1]?.blood_pressure.systolic.value}
          </p>
          <p className="text-sm flex items-center gap-1 mt-2 font-medium text-[#072635]">
            <ChevronUp size={14} />
            {data[data.length - 1]?.blood_pressure.systolic.levels}
          </p>
        </div>
        <div className="w-25 h-px bg-[#CBCAD3]"></div>
        <div>
          <div className="flex gap-2.5 items-center mb-2">
            <div className="bg-[#7E6CAB] w-3.5 h-3.5 rounded-full"></div>
            <h3 className="text-sm text-black font-medium">Diastolic</h3>
          </div>
          <p className="text-xl font-bold">
            {data[data.length - 1]?.blood_pressure.diastolic.value}
          </p>
          <p className="text-sm flex items-center gap-1 mt-2 font-medium text-[#072635]">
            <ChevronDown size={14} />
            {data[data.length - 1]?.blood_pressure.diastolic.levels}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
