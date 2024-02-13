import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

const Preference = () => {
  return (
    <form className="flex flex-col gap-5 mt-8 md:mt-0">
      <div className="flex flex-col gap-4 md:flex-row flex-1">
        <div className=" basis-1/2">
          <label
            htmlFor="currency"
            className=" text-[13px] mb-2 block xl:text-base"
          >
            Currency
          </label>
          <Input
            placeholder="USD"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs xl:py-6 xl:placeholder:text-sm"
          />
        </div>
        <div className=" basis-1/2">
          <label
            htmlFor="time-zone"
            className=" text-[13px] mb-2 block xl:text-base"
          >
            Time Zone
          </label>
          <Input
            placeholder="(GMT-12:00) International Date Line West"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs xl:py-6 xl:placeholder:text-sm"
          />
        </div>
      </div>

      <div className="mt-3">
        <h4 className=" text-sm text-primary2 font-medium ">Notification</h4>
        <div className="grid ">
          <div className="flex items-center space-x-3 mt-3">
            <Switch id="digit-currency" />
            <label
              htmlFor="digit-currency"
              className="text-[13px] xl:text-base"
            >
              Airplane Mode
            </label>
          </div>
          <div className="flex items-center space-x-3 mt-5">
            <Switch id="merchant-order" />
            <label
              htmlFor="merchant-order"
              className="text-[13px] xl:text-base"
            >
              I receive merchant order
            </label>
          </div>
        </div>

        <div className="flex items-center space-x-3 mt-3">
          <Switch id="merchant-order" />
          <label htmlFor="merchant-order" className="text-[13px] xl:text-base">
            There are recommendation for my account
          </label>
        </div>
      </div>

      <Button className=" bg-secondary-blue text-base text-white font-medium ms-auto md:px-10">
        Save
      </Button>
    </form>
  );
};

export default Preference;
