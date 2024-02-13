import CreditCard from "@/components/CreditCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { BadgeCent, CreditCardIcon, Send } from "lucide-react";
import { Link } from "react-router-dom";

import BarChartUi from "@/components/charts/BarChartUi";
import PieChartUi from "@/components/charts/PieChartUi";
import MyLineChart from "@/components/charts/LineChartUi";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div className=" lg:col-span-2">
        <div className="w-full flex justify-between ">
          <h2 className=" heading1">My Cards</h2>
          <Link className="text-primary2 font-semibold" to={"/credit-cards"}>
            See All
          </Link>
        </div>

        <div className="mt-5 -mr-5 lg:mr-0">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className=" basis-2/1">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className="basis-2/1">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className="basis-2/1">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className="basis-2/1">
                <CreditCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className="heading1">Recent Transaction</h2>
        <div className="flex flex-col gap-4 py-4 px-2 md:px-6 xl:px-6 md:mt-6 md:ms-6 lg:ms-0 lg:bg-white rounded-2xl">
          <div className="flex items-center">
            <div className="w-12 h-12 flex-center mr-4 rounded-full bg-yellow-200">
              <CreditCardIcon className=" text-yellow-400 w-6 h-6 " />
            </div>
            <div>
              <h4 className=" text-sm font-medium">Deposit from my</h4>
              <p className="text-[12px] text-gray-400">28 January 2021</p>
            </div>
            <span className=" text-xs font-medium text-red-600 ml-auto">
              -$850
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 flex-center mr-4 rounded-full bg-blue-100">
              <CreditCardIcon className=" text-blue-400 w-6 h-6 " />
            </div>
            <div>
              <h4 className=" text-sm font-medium">Deposit Paypal</h4>
              <p className="text-[12px] text-gray-400">25 January 2021</p>
            </div>
            <span className=" text-xs font-medium text-green-400 ml-auto">
              +$2,500
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 flex-center mr-4 rounded-full bg-green-200">
              <BadgeCent className=" text-green-400 w-6 h-6 " />
            </div>
            <div>
              <h4 className=" text-sm font-medium">Jemi Wilson</h4>
              <p className="text-[12px] text-gray-400">28 January 2021</p>
            </div>
            <span className=" text-xs font-medium text-green-400 ml-auto">
              +$5,400
            </span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Weekly Activity</h2>
        <BarChartUi />
      </div>
      <div>
        <h2 className="heading1 mb-4">Expense Statistics</h2>
        <div className="h-[87%] flex-center lg:bg-white rounded-xl">
          <PieChartUi />
        </div>
      </div>
      <div className=" grid-cols-2">
        <h2 className="heading1 mb-4 md:mb-14 lg:mb-4">Quick Transfer</h2>
        <div className="flex flex-col max-w-sm mt-5 mx-auto p-4 lg:px-6 lg:py-8 lg:bg-white lg:rounded-2xl">
          <Carousel className="w-[80%]">
            <CarouselContent>
              <CarouselItem className=" basis-2/1">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src="./assets/person1.jpg"
                    alt=""
                    className="w-14 h-14 bg-cover rounded-full"
                  />
                  <div className="text-center">
                    <h4 className="text-xs font-normal mb-1">Randy Press</h4>
                    <p className=" text-xs text-gray-500">CEO </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-2/1">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src="./assets/person1.jpg"
                    alt=""
                    className="w-14 h-14 bg-cover rounded-full"
                  />
                  <div className="text-center">
                    <h4 className="text-xs font-normal mb-1">Randy Press</h4>
                    <p className=" text-xs text-gray-500">CEO </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-2/1">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src="./assets/person2.jpg"
                    alt=""
                    className="w-14 h-14 bg-cover rounded-full"
                  />
                  <div className="text-center">
                    <h4 className="text-xs font-normal mb-1">Livia Bator</h4>
                    <p className=" text-xs text-gray-500">Designer</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-2/1">
                <div className="flex flex-col items-center gap-4">
                  <img
                    src="./assets/person3.jpg"
                    alt=""
                    className="w-14 h-14 bg-cover rounded-full"
                  />
                  <div className="text-center">
                    <h4 className="text-xs font-normal mb-1">Daisy almit</h4>
                    <p className=" text-xs text-gray-500">Director</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselNext />
          </Carousel>
          <div className="flex lg:flex-col xl:flex-row items-center gap-4 mt-6 ">
            <p className="text-xs text-wild-blue">Write Amount</p>
            <div className="flex items-center gap-4 bg-cultred-blue rounded-s-full ">
              <span className="p-2 px-4 text-xs text-wild-blue">525.50</span>
              <button className="flex items-center gap-1 bg-blue-600 p-2 px-6 rounded-full text-white">
                Send
                <Send width={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Balance History</h2>
        <div className="h-[85%] md:px-4 md:py-6 lg:bg-white lg:rounded-2xl xl:h-[84%] ">
          <MyLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
