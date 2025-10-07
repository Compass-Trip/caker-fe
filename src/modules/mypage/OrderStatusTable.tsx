import { cn } from "@/lib/utils";

export type OrderLogItem = {
  datetime: string;
  status: string;
};

export interface OrderStatusTableProps {
  items: OrderLogItem[];
  className?: string;
}

export function OrderStatusTable({ items, className }: OrderStatusTableProps) {
  return (
    <div
      className={cn(
        `mt-1 mb-4 overflow-hidden rounded-2xl border border-gray-200`,
        className
      )}
    >
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr className="text-sm text-gray-600">
            <th className="py-3 px-4 font-medium text-center">처리일시</th>
            <th className="py-3 px-4 font-medium text-center">상태</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {items.map((it, i) => (
            <tr
              key={i}
              className={cn(i === 0 ? "text-gray-700" : "text-gray-400")}
            >
              <td className="py-3 px-4 text-center">{it.datetime}</td>
              <td className="py-3 px-4 text-center">{it.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
