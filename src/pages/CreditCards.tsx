import AddCardForm from "@/components/AddCardForm";
import CreditCard from "@/components/CreditCard";
import ExpenseStatisticsChart from "@/components/charts/ExpenseStatisticsChart";
import { MdOutlineCreditCardOff } from "react-icons/md";
import { IoLockClosed } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const CreditCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 lg:gap-6">
      <div className="md:col-span-3">
        <h2 className=" heading1">My Cards</h2>
        <div className="mt-5 -mr-6 lg:mr-0">
          <Carousel className="w-full ">
            <CarouselContent>
              <CarouselItem className=" basis-2/1 lg:basis-1/3">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className=" basis-2/1 lg:basis-1/3">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className=" basis-2/1 lg:basis-1/3">
                <CreditCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className="heading1 mb-4">Card Expense Statistics</h2>
        <div className="bg-white rounded-xl h-[310px] md:h-[230px] lg:h-[231px] ">
          <ExpenseStatisticsChart />
        </div>
      </div>
      <div className=" md:col-span-2">
        <h2 className="heading1 mb-4">Card List</h2>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 bg-white p-3 rounded-lg">
            <div className="w-11 h-11 flex-center bg-blue-200 rounded-xl">
              <FaMoneyCheckDollar className="text-lg text-blue-600" />
            </div>
            <div className="flex items-center gap-4 flex-1 xl:gap-12">
              <div>
                <p className="text-sm font-medium xl:text-base">Card Type</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Secondary
                </p>
              </div>
              <div>
                <p className="text-sm font-medium xl:text-base">Bank</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  DBL Bank
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Card Number</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  **** **** 5600
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Namain Card</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  William
                </p>
              </div>
            </div>
            <button className="text-[11px] text-secondary-blue ms-auto xl:text-[15px] xl:font-medium ">
              View Details
            </button>
          </div>
          <div className="flex  items-center gap-4 bg-white p-3 rounded-lg">
            <div className="w-11 h-11 flex-center bg-pink-200 rounded-xl">
              <FaMoneyCheckDollar className="text-lg text-pink-500" />
            </div>
            <div className="flex items-center gap-4 flex-1 xl:gap-12">
              <div>
                <p className="text-sm font-medium xl:text-base">Card Type</p>
                <p className="text-xs text-wild-blue xl:text-[15px]">
                  Secondary
                </p>
              </div>
              <div>
                <p className="text-sm font-medium xl:text-base">Bank</p>
                <p className="text-xs text-wild-blue xl:text-[15px]">
                  BRC Bank
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Card Number</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  **** **** 5120
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Namain Card</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">Michel</p>
              </div>
            </div>

            <button className="text-[11px] text-secondary-blue ms-auto xl:text-[15px] xl:font-medium">
              View Details
            </button>
          </div>
          <div className="flex  items-center gap-4 bg-white p-3 rounded-lg">
            <div className="w-11 h-11 flex-center bg-yellow-100 rounded-xl">
              <FaMoneyCheckDollar className="text-lg text-yellow-500" />
            </div>
            <div className="flex  items-center gap-4 flex-1 xl:gap-12">
              <div>
                <p className="text-sm font-medium xl:text-base">Card Type</p>
                <p className="text-xs text-wild-blue xl:text-[15px]">
                  Secondary
                </p>
              </div>
              <div>
                <p className="text-sm font-medium xl:text-base">Bank</p>
                <p className="text-xs text-wild-blue xl:text-[15px]">
                  ABM Bank
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Card Number</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  **** **** 7200
                </p>
              </div>
              <div className=" hidden xl:block">
                <p className="text-sm font-medium xl:text-base">Namain Crad</p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">Edward</p>
              </div>
            </div>
            <button className="text-[11px] text-secondary-blue ms-auto xl:text-[15px] xl:font-medium">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <h2 className="heading1 mb-4">Add New Card</h2>
        <AddCardForm />
      </div>
      <div>
        <h2 className="heading1 mb-4">Card Setting</h2>
        <div className=" flex flex-col gap-4 bg-white p-5 rounded-xl lg:gap-3 xl:gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex-center bg-yellow-100 rounded-lg">
              <MdOutlineCreditCardOff className="text-lg text-yellow-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Block Card</p>
              <p className="text-xs text-wild-blue">
                Instantly block your card
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex-center bg-blue-100 rounded-lg">
              <IoLockClosed className="text-lg text-blue-500" />
            </div>
            <div>
              <p className="text-sm font-medium">Change Pic Code</p>
              <p className="text-xs text-wild-blue">
                Withdrow without any card
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-lg">
              <FaGoogle className="text-lg text-red-500" />
            </div>
            <div>
              <p className="text-sm font-medium"> Add to Google Pay</p>
              <p className="text-xs text-wild-blue">
                Withdrow without any card
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex-center bg-green-100 rounded-lg">
              <AiOutlineApple className="text-2xl text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium"> Add to Apple Pay</p>
              <p className="text-xs text-wild-blue">
                Withdrow without any card
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex-center bg-green-100 rounded-lg">
              <AiOutlineApple className="text-2xl text-green-400" />
            </div>
            <div>
              <p className="text-sm font-medium"> Add to Apple Store</p>
              <p className="text-xs text-wild-blue">
                Withdrow without any card
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
