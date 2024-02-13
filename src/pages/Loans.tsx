import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { LiaChartBarSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";
import ActiveLoansTable from "@/components/ActiveLaonsTable";

const Loans = () => {
  return (
    <div className="grid grid-cols-1  gap-5">
      <>
        <div className="-mr-6 lg:mr-0">
          <Carousel>
            <CarouselContent>
              <CarouselItem className=" basis-62 xl:basis-1/4">
                <div className="flex items-center gap-3 py-5 px-11 lg:px-5 bg-white rounded-xl">
                  <div className="w-11 h-11 flex-center bg-blue-100 rounded-full">
                    <FaUser className="text-lg text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-wild-blue">Personal Loans</p>
                    <p className="text-base font-semibold">$50,000</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-62 xl:basis-1/4">
                <div className="flex items-center gap-3 py-5 px-11 lg:px-5 bg-white rounded-xl">
                  <div className="w-11 h-11 flex-center bg-yellow-100 rounded-full">
                    <MdBusinessCenter className="text-lg text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs text-wild-blue">Corporate Loans</p>
                    <p className="text-base font-semibold">$100,000</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-62 xl:basis-1/4">
                <div className="flex items-center gap-3 py-5 px-11 lg:px-5 bg-white rounded-xl">
                  <div className="w-11 h-11 flex-center bg-red-100 rounded-full">
                    <LiaChartBarSolid className="text-lg text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-wild-blue">Business Loans</p>
                    <p className="text-base font-semibold">$500,000</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-62 xl:basis-1/4">
                <div className="flex items-center gap-3 p-5 px-11 lg:px-5 bg-white rounded-xl">
                  <div className="w-11 h-11 flex-center bg-green-100 rounded-full">
                    <MdOutlineDesignServices className="text-lg text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-wild-blue">Custum Loans</p>
                    <p className="text-base font-semibold">Choose Money</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </>
      <div>
        <h2 className="heading1 mb-4">Active Loans Overview</h2>
        <ActiveLoansTable />
      </div>
    </div>
  );
};

export default Loans;
