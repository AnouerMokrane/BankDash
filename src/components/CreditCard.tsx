const CreditCard = () => {
  return (
    <div className=" flex flex-col gap-3 w-[100%] xl:w-[350px] rounded-2xl text-white blue-gradient1 overflow-hidden">
      <div className="p-6">
        <div className="flex ">
          <div className="flex-1 -space-y-1">
            <span className=" text-xs mb-6">Balnce</span>
            <p className=" font-semibold text-sm 2xl:text-xl">$5.756</p>
          </div>
          <img src="./assets/Chip_Card.svg" alt="" />
        </div>
        <ul className="flex items-center gap-12">
          <li className="-space-y-1">
            <span className=" text-[10px] 2xl:text-xs text-white/70">
              CARD HOLDER
            </span>
            <p className=" text-xs 2xl:text-sm font-semibold">Eddy Cusuma</p>
          </li>
          <li className="-space-y-1">
            <span className=" text-xs text-white/70">VALID THRU</span>
            <p className="text-sm font-semibold">12/22</p>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center py-6 px-[20px] 2xl:p-6 border-t border-gray-400 text-center  bg-gradient-to-b from-white/20 to-primary3">
        <p className=" text-sm xl:text-xl font-semibold">
          {" "}
          3778 **** **** 1234
        </p>
        <div className="flex items-center -space-x-4">
          <div className="bg-white/40 w-7 h-7 rounded-full" />
          <div className="bg-white/40 w-7 h-7 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
