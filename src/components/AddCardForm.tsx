import { Input } from "./ui/input";
import { Button } from "./ui/button";

const AddCardForm = () => {
  return (
    <>
      <form className="bg-white p-5 rounded-2xl ">
        <p className="text-xs text-wild-blue leading-6 mb-5">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <div className="grid md:grid-cols-2 gap-3 ">
          <div>
            <label htmlFor="card-type" className="text-[13px] mb-4">
              Card Type
            </label>
            <Input placeholder="Classic" className="mt-2 placeholder:text-xs" />
          </div>
          <div>
            <label htmlFor="card-type" className="text-[13px] mb-4">
              Name On Card
            </label>
            <Input
              placeholder="My Cards"
              className="mt-2 placeholder:text-xs"
            />
          </div>
          <div>
            <label htmlFor="card-type" className="text-[13px] mb-4">
              Card Number
            </label>
            <Input
              placeholder="**** **** **** ****"
              className="mt-2 placeholder:text-xs"
            />
          </div>
          <div c>
            <label htmlFor="card-type" className="text-[13px] mb-4">
              Expiration Date
            </label>
            <Input
              placeholder="25 January 2025"
              className="mt-2 placeholder:text-xs"
            />
          </div>
          <Button className="text-[15px] font-medium bg-secondary-blue text-white mt-2">
            Add Card
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddCardForm;
