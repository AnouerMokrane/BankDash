import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaShieldHeart } from "react-icons/fa6";
import { AiFillShopping } from "react-icons/ai";
import { MdHealthAndSafety } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { LiaChartBarSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";

const Services = () => {
  return (
    <div className="grid grid-cols-1  gap-5">
      <div className="-mr-6 md:mr-0">
        <Carousel>
          <CarouselContent>
            <CarouselItem className=" basis-62 md:basis-1/3">
              <div className="flex items-center gap-3 py-5 px-7 lg:px-5 xl:px-12 bg-white rounded-xl">
                <div className="w-11 h-11 flex-center bg-blue-100 rounded-full xl:w-[70px] xl:h-[70px] ">
                  <FaShieldHeart className="text-xl text-blue-600 xl:text-3xl" />
                </div>
                <div>
                  <p className="text-base font-semibold xl:text-xl xl:mb-0.5">
                    Life Insurance
                  </p>
                  <p className="text-xs text-wild-blue xl:text-base">
                    Unlimited protection
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-62 md:basis-1/3">
              <div className="flex items-center gap-3 py-5 px-7 lg:px-5 xl:px-12 bg-white rounded-xl">
                <div className="w-11 h-11 flex-center bg-yellow-100 rounded-full xl:w-[70px] xl:h-[70px] ">
                  <AiFillShopping className="text-xl text-yellow-600 xl:text-3xl" />
                </div>
                <div>
                  <p className="text-base font-semibold xl:text-xl xl:mb-0.5">
                    Shopping{" "}
                  </p>
                  <p className="text-xs text-wild-blue xl:text-base">
                    Buy. Think. Grow
                  </p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className=" basis-62 md:basis-1/3">
              <div className="flex items-center gap-3 py-5 px-7 lg:px-5 xl:px-12 bg-white rounded-xl ">
                <div className="w-11 h-11 flex-center bg-green-100 rounded-full xl:w-[70px] xl:h-[70px]">
                  <MdHealthAndSafety className="text-xl text-green-600 xl:text-3xl" />
                </div>
                <div>
                  <p className="text-base font-semibold xl:text-xl xl:mb-0.5">
                    Safety
                  </p>
                  <p className="text-xs text-wild-blue xl:text-base">
                    We are your allies
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div>
        <h2 className="heading1 mb-4">Bank Services List</h2>
        <div className="flex flex-col gap-3">
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <GiReceiveMoney className="text-xl text-red-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Business loans
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-yellow-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <MdOutlineBusinessCenter className="text-xl text-yellow-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Checking accounts
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <LiaChartBarSolid className="text-xl text-red-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Savings accounts
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-blue-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <FaUser className="text-xl text-blue-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Debit and credit cards
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-green-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <FaShieldHeart className="text-xl text-green-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Life Insurance
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
          <div className=" bg-white p-3 rounded-xl flex items-center gap-3 xl:p-4 xl:gap-5">
            <div className="w-11 h-11 flex-center bg-red-100 rounded-xl xl:w-[60px] xl:h-[60px] ">
              <GiReceiveMoney className="text-xl text-red-500 xl:text-2xl" />
            </div>
            <div className="flex items-center gap-8 xl:gap-[70px] ">
              <div>
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  Business loans
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  It is a long established
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
              <div className="hidden md:block">
                <p className="text-[13px] font-medium xl:text-base mb-0.5">
                  lorem Ipsum
                </p>
                <p className="text-xs text-wild-blue xl:text-[15px] ">
                  Many publishing
                </p>
              </div>
            </div>
            <button className="text-xs text-secondary-blue ms-auto md:border md:border-secondary-blue md:py-2 md:px-6 md:rounded-full xl:px-10">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
