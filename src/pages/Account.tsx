import CreditCard from "@/components/CreditCard";
import DebitCreditChart from "@/components/charts/DebitCreditChart";
import {
  BadgeCent,
  BellIcon,
  Calculator,
  Coins,
  Gamepad2,
  PiggyBank,
  Settings,
  ShoppingBag,
  User2,
  User2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:col-span-2 lg:col-span-3">
        <div className="flex items-center gap-2 bg-white p-4 lg:p-6 rounded-lg lg:gap-4 lg:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-yellow-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <BadgeCent className="text-yellow-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">My Balance</p>
            <p className=" text-base font-semibold lg:text-2xl">$12.750</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 lg:p-6 rounded-lg lg:gap-4 lg:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-blue-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <Coins className="text-blue-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">Income</p>
            <p className=" text-base font-semibold lg:text-2xl">$5.600</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 lg:p-6 rounded-lg lg:gap-4 lg:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-red-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <Calculator className="text-red-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">Expense</p>
            <p className=" text-base font-semibold lg:text-2xl">$3.460</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white p-4 lg:p-6 rounded-lg lg:gap-4 lg:rounded-2xl">
          <div className="w-11 h-11 flex-center bg-green-100 rounded-full lg:w-[70px] lg:h-[70px]">
            <PiggyBank className="text-green-500" />
          </div>
          <div>
            <p className=" text-xs text-wild-blue lg:text-base">Total Saving</p>
            <p className=" text-base font-semibold lg:text-2xl">$7.920</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Last Transaction</h2>
        <div className="flex flex-col gap-4 bg-white p-5 md:gap-6 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-green-100 rounded-2xl">
              <BellIcon width={18} className=" text-green-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Spotify Subscription
              </h4>
              <p className="text-xs text-wild-blue">25 Jan 2021</p>
            </div>
            <span className=" text-red-500 text-xs ms-auto">-$250</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-blue-100 rounded-2xl">
              <Settings width={18} className=" text-blue-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Mobile Service
              </h4>
              <p className="text-xs text-wild-blue">25 Jan 2021</p>
            </div>
            <span className=" text-red-500 text-xs ms-auto">-$340</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-xl">
              <User2 width={18} className=" text-red-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Emily Wilson
              </h4>
              <p className="text-xs text-wild-blue">25 Jan 2021</p>
            </div>
            <span className=" text-green-400 text-xs ms-auto">+$750</span>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex items-center justify-between mb-4">
          <h2 className="heading1">My Card</h2>
          <Link
            className="text-primary2 font-semibold text-sm"
            to={"/credit-cards"}
          >
            See All
          </Link>
        </div>
        <div>
          <CreditCard />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h2 className="heading1 mb-4">Debit & Credit OverView</h2>
        <div>
          <DebitCreditChart />
        </div>
      </div>
      <div>
        <h2 className="heading1 mb-4">Invoices Sent</h2>
        <div className="flex flex-col gap-4 bg-white p-5 md:gap-[22px] rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-green-100 rounded-2xl">
              <ShoppingBag width={18} className=" text-green-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Apple Store
              </h4>
              <p className="text-xs text-wild-blue">5h ago</p>
            </div>
            <span className=" text-xs text-wild-blue ms-auto">$450</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-yellow-100 rounded-2xl">
              <User2Icon width={22} className=" text-yellow-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">Michael</h4>
              <p className="text-xs text-wild-blue">2 days ago</p>
            </div>
            <span className=" text-xs text-wild-blue ms-auto">$160</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-blue-100 rounded-2xl">
              <Gamepad2 width={18} className=" text-blue-600" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">
                Playstation
              </h4>
              <p className="text-xs text-wild-blue">8 days ago</p>
            </div>
            <span className=" text-xs text-wild-blue ms-auto">$1080</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-2xl">
              <User2Icon width={22} className=" text-red-400" />
            </div>
            <div>
              <h4 className=" text-primary2 text-sm font-medium">Michael</h4>
              <p className="text-xs text-wild-blue">10 days ago</p>
            </div>
            <span className=" text-xs text-wild-blue ms-auto">$90</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
