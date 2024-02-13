import CreditCard from "@/components/CreditCard";
import ExpenseBarChart from "@/components/charts/ExpenseBarChart";
import TransactionTable from "@/components/TransactionTable";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Transactions = () => {
  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10">
      <div className="lg:col-span-2">
        <div className="w-full flex justify-between ">
          <h2 className=" heading1">My Cards</h2>
          <Link
            className="flex items-center gap-1 text-primary2 font-semibold"
            to={"/credit-cards"}
          >
            <PlusIcon /> Add Card
          </Link>
        </div>

        <div className="mt-5 -mr-5 lg:-mr-0">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className=" basis-[80%] lg:basis-[70%] xl:basis-1/2">
                <CreditCard />
              </CarouselItem>
              <CarouselItem className="basis-[80%] lg:basis-[70%] xl:basis-1/2">
                <CreditCard />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div>
        <h2 className="heading1 mb-4">My Expense</h2>
        <div className="lg:bg-white py-4 lg:px-4 rounded-xl h-[220px]">
          <ExpenseBarChart />
        </div>
      </div>
      <div className=" md:col-span-2 lg:col-span-3">
        <h2 className="heading1 mb-4">Recent transactions</h2>
        <ul className="w-full flex items-center gap-8 md:gap-16 border-b pb-2">
          <li className="text-sm font-medium text-primary3 border-b-4 border-primary3">
            All transactions
          </li>
          <li className="text-sm font-medium text-wild-blue">Income</li>
          <li className="text-sm font-medium text-wild-blue">Expense</li>
        </ul>
        <div className="mt-6">
          <TransactionTable />
          <ul className="flex items-center justify-end gap-2 my-4 text-blue-600">
            <li>
              <button className="flex items-center gap-1 text-xs">
                <ArrowLeft width={14} />
                Previous
              </button>
            </li>
            <li className="flex-center text-xs w-7 h-7 text-white bg-blue-600 rounded-md">
              1
            </li>
            <li className="flex-center text-xs w-7 h-7 text-blue-600">2</li>
            <li className="flex-center text-xs w-7 h-7 text-blue-600">3</li>
            <li className="flex-center text-xs w-7 h-7 text-blue-600">4</li>

            <button className="flex items-center gap-1 text-xs">
              Next
              <ArrowRight width={14} />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
