export function DashboardCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-white shadow p-6 flex flex-col items-center m-2 min-w-[150px]">
      <span className="text-lg font-medium text-gray-500">{title}</span>
      <span className="text-4xl font-bold text-yellow-700 mt-2">{value}</span>
    </div>
  );
}
