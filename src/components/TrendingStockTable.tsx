import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trendingStockData } from "@/constants";

const TrendingStockTable = () => {
  return (
    <div>
      <Table className="bg-white p-4 rounded-xl">
        <TableHeader>
          <TableRow>
            <TableHead className="text-xs px-2">SL No</TableHead>
            <TableHead className="text-xs">Name</TableHead>
            <TableHead className="text-xs">Price</TableHead>
            <TableHead className="text-xs">Return</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trendingStockData.map((data) => (
            <TableRow key={data.name} className="border-0">
              <TableCell className="text-xs py-1">
                {data.id < 10 ? 0 : ""}
                {data.id}.{" "}
              </TableCell>
              <TableCell className="text-xs py-3">{data.name} </TableCell>
              <TableCell className="text-xs py-1">${data.price} </TableCell>
              <TableCell
                className={`text-xs py-1 ${
                  data.return < 0 ? "text-red-500" : "text-green-500"
                }  `}
              >
                {data.return > 0 ? "+" : ""}
                {data.return}%{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TrendingStockTable;
