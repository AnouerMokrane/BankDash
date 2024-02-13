import MonthlyRevenueChart from "@/components/charts/MonthlyRevenueChart";
import YearlyInvestmentChart from "@/components/charts/YearlyInvestmentChart";
import {
  ArrowLeftRight,
  CircleDollarSign,
  PercentCircleIcon,
} from "lucide-react";
import { FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { GrGoogle } from "react-icons/gr";
import TrendingStockTable from "@/components/TrendingStockTable";

const Investments = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:col-span-2 md:gap-6 lg:col-span-4">
        <div className="flex items-center gap-3 bg-white py-5 px-12 rounded-xl md:px-6 xl:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-green-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <CircleDollarSign className="text-green-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">
              Total Invested Amount
            </p>
            <p className=" text-base font-semibold lg:text-2xl">$150.000</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white py-5 px-12 rounded-xl md:px-6 xl:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-red-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <PercentCircleIcon className="text-red-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">
              Number of Investments
            </p>
            <p className=" text-base font-semibold lg:text-2xl">$1.250</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white py-5 px-12 rounded-xl md:px-6 xl:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-blue-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <ArrowLeftRight className="text-blue-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">
              Rate of Return
            </p>
            <p className=" text-base font-semibold lg:text-2xl">+5.80%</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Yearly Total Investment</h2>
        <div className="p-4 bg-white rounded-xl">
          <YearlyInvestmentChart />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Monthly Revenue </h2>
        <div className="p-4 bg-white rounded-xl">
          <MonthlyRevenueChart />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">My Investment</h2>
        <div className="flex flex-col gap-4  md:gap-3">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-2xl">
              <FaApple className=" text-red-500 text-xl" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Apple Store
              </h4>
              <p className="text-xs text-wild-blue">E-commerce, Marketplace</p>
            </div>
            <span className=" text-green-500 text-xs ms-auto">+16%</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
            <div className="w-11 h-11 flex-center bg-blue-100 rounded-2xl">
              <GrGoogle className=" text-blue-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Samsung Mobile
              </h4>
              <p className="text-xs text-wild-blue">E-commerce, Marketplace</p>
            </div>
            <span className=" text-green-500 text-xs ms-auto">+%4</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
            <div className="w-11 h-11 flex-center bg-yellow-100 rounded-xl">
              <SiTesla width={18} className=" text-yellow-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Tesla Motors
              </h4>
              <p className="text-xs text-wild-blue">Electric Vehicles</p>
            </div>
            <span className=" text-green-400 text-xs ms-auto">+25%</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">My Investment</h2>

        <TrendingStockTable />
      </div>
    </div>
  );
};

export default Investments;
