import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const Security = () => {
  return (
    <form className="flex flex-col gap-5 ">
      <div className="">
        <h4 className=" text-sm text-primary2 font-medium xl:text-base">
          Two-Tactor Authentication
        </h4>
        <div className="flex items-center space-x-3 mt-3">
          <Switch id="merchant-order" />
          <label htmlFor="merchant-order" className="text-[13px] xl:text-base">
            Enable or disable two factor authentication
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="currency"
          className=" text-[13px] mb-2 block xl:text-base"
        >
          Currency
        </label>
        <Input
          placeholder="USD"
          className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs xl:py-6 xl:placeholder:text-sm xl:max-w-lg"
        />
      </div>
      <div>
        <label
          htmlFor="time-zone"
          className=" text-[13px] mb-2 block xl:text-base"
        >
          Time Zone
        </label>
        <Input
          placeholder="(GMT-12:00) International Date Line West"
          className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs xl:py-6 xl:placeholder:text-sm xl:max-w-lg"
        />
      </div>
      <Button className=" bg-secondary-blue text-base text-white font-medium ms-auto lg:px-10">
        Save
      </Button>
    </form>
  );
};

export default Security;
