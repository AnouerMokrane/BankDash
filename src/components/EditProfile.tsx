import { MdEdit } from "react-icons/md";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EditProfile = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-4">
      <div className=" w-44 h-44 mx-auto relative md:w-28 md:h-28">
        <img src="./assets/user.png" alt="" className="w-full" />
        <div className="w-11 h-11 flex-center bg-secondary-blue rounded-full text-white text-xl absolute bottom-1 right-0 md:w-8 md:h-8">
          <MdEdit />
        </div>
      </div>
      <form className=" flex-1 grid md:grid-cols-2 gap-5 mt-8 md:mt-0">
        <div>
          <label htmlFor="name" className=" text-[13px] mb-2 block">
            Your Name
          </label>
          <Input
            placeholder="Charlene Reed"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="user-name" className=" text-[13px] mb-2 block">
            User Name
          </label>
          <Input
            placeholder="Charlene Reed"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="email" className=" text-[13px] mb-2 block">
            Email
          </label>
          <Input
            placeholder="charlenereed@gmail.com"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="password" className=" text-[13px] mb-2 block">
            Password
          </label>
          <Input
            placeholder="********"
            className=" rounded-lg placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="birthday" className=" text-[13px] mb-2 block">
            Date of Birth
          </label>
          <Input
            type="date"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="present-address" className=" text-[13px] mb-2 block">
            Present Address
          </label>
          <Input
            placeholder="San Jose, California, USA"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label
            htmlFor="permanent-address"
            className=" text-[13px] mb-2 block"
          >
            Permanent Address
          </label>
          <Input
            placeholder="San Jose, California, USA"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="city" className=" text-[13px] mb-2 block">
            City
          </label>
          <Input
            placeholder="San Jose"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="postal-code" className=" text-[13px] mb-2 block">
            Postal Code
          </label>
          <Input
            placeholder="45962"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <div>
          <label htmlFor="country" className=" text-[13px] mb-2 block">
            Country
          </label>
          <Input
            placeholder="USA"
            className=" rounded-lg text-wild-blue placeholder:text-wild-blue placeholder:text-xs"
          />
        </div>
        <Button className=" bg-secondary-blue text-base text-white font-medium md:col-end-3">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditProfile;
