import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { activeLoansData } from "@/constants";

export default function ActiveLoansTable() {
  return (
    <Table className="bg-white p-4 rounded-xl">
      <TableHeader>
        <TableRow>
          <TableHead className="text-xs text-wild-blue font-medium">
            SL No
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Loan Money
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Left to repay
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Duration
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Interest rate
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Installment
          </TableHead>
          <TableHead className="text-xs text-wild-blue font-medium">
            Repay
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activeLoansData.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="text-xs">
              {" "}
              {data.id < 10 && "0"}
              {data.id}.
            </TableCell>
            <TableCell className="text-xs">${data["loans-money"]}</TableCell>
            <TableCell className="text-xs">${data["left-to-repay"]}</TableCell>
            <TableCell className="text-xs">{data.duration} Months</TableCell>
            <TableCell className="text-xs">{data["interest-rate"]}%</TableCell>
            <TableCell className="text-xs">
              ${data.installment} / Month
            </TableCell>
            <TableCell className="text-xs">
              <button className="text-xs font-medium text-secondary-blue py-2 px-6 border border-secondary-blue rounded-full">
                Repay
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="text-red-400">Total</TableCell>
          <TableCell className=" text-red-400">$2,500.00</TableCell>
          <TableCell className=" text-red-400">$2,100.00</TableCell>
          <TableCell className=" text-red-400"></TableCell>
          <TableCell className=" text-red-400"></TableCell>
          <TableCell className=" text-red-400">$1,760.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
