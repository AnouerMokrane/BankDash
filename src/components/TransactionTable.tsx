import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { transactions } from "@/constants";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "lucide-react";

type ITransaction = {
  description: string;
  id: number;
  category: string;
  maskedCardNumber: string;
  date: Date;
  amount: number;
};

const TransactionTable = () => {
  return (
    <div>
      <Table className="bg-white rounded-xl">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Description</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="">Card</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction: ITransaction) => (
            <TableRow key={transaction.description} className="">
              <TableCell className="flex items-center gap-2 text-xs p-4 py-4">
                {transaction.amount < 0 ? (
                  <ArrowUpCircleIcon className=" text-gray-500" />
                ) : (
                  <ArrowDownCircleIcon className=" text-gray-500" />
                )}
                {transaction.description}
              </TableCell>
              <TableCell className="text-xs p-4 py-2">
                {transaction.id}
              </TableCell>
              <TableCell className="text-xs p-4 py-2">
                {transaction.category}{" "}
              </TableCell>
              <TableCell className="text-xs p-4 py-2">
                {transaction.maskedCardNumber}{" "}
              </TableCell>
              <TableCell width={200} className="text-xs p-4 py-2">
                {transaction.date.toDateString()}
              </TableCell>
              <TableCell
                className={`${
                  transaction.amount < 0 ? "text-red-400" : "text-green-500"
                }`}
              >
                {" "}
                ${transaction.amount}{" "}
              </TableCell>
              <TableCell className="p-4 py-2">
                <Button className="text-xs text-blue-600 px-6 border border-blue-600  rounded-full">
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionTable;
