import { AlignJustify, BellDot, Search, Settings } from "lucide-react";
import { Input } from "./ui/input";
import { useDashContext } from "@/context/DashContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { setOpenSidebar } = useDashContext();
  const location = useLocation();
  return (
    <header className="flex flex-col gap-6 py-6 px-4 lg:px-8 lg:border-b">
      <div className="flex justify-between items-center">
        <button className="lg:hidden" onClick={() => setOpenSidebar(true)}>
          <AlignJustify className=" text-primary2" />
        </button>
        <h2 className=" text-lg lg:text-2xl xl:text-3xl font-semibold text-primary2 capitalize">
          {location.pathname === "/" && "Overview"}{" "}
          {location.pathname.replace(/^\/|-/g, " ")}
        </h2>
        <div className="flex items-center gap-4">
          <div className=" relative hidden lg:block">
            <Search
              className=" absolute top-1/2 left-3 -translate-y-1/2  text-slate-blue"
              width={18}
            />
            <Input
              className="rounded-full  px-10 bg-cultred-blue border-0  placeholder:text-slate-blue"
              placeholder="Search for something"
            />
          </div>
          <button className="w-10 h-10  rounded-full text-wild-blue bg-cultred-blue hidden lg:flex lg:justify-center lg:items-center">
            <Settings width={18} height={18} />
          </button>
          <button className="w-10 h-10 rounded-full text-red-400 bg-cultred-blue hidden lg:flex lg:justify-center lg:items-center">
            <BellDot width={18} height={18} />
          </button>
          <button>
            <img
              className="border rounded-full"
              width={45}
              height={45}
              src="./assets/user.png"
              alt="user_avatar"
            />
          </button>
        </div>
      </div>
      <div className=" relative lg:hidden">
        <Search
          className=" absolute top-1/2 left-3 -translate-y-1/2  text-slate-blue"
          width={18}
        />
        <Input
          className="rounded-full  px-10 bg-cultred-blue border-0  placeholder:text-slate-blue"
          placeholder="Search for something"
        />
      </div>
    </header>
  );
};

export default Header;
