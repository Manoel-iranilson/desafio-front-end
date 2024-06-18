import { BarChart } from "@mui/x-charts";

export default function Reality() {
  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];
  const awaiting = [100, 200, 300, 300, 400, 200, 400];
  const implanted = [200, 300, 400, 500, 400, 300, 500];
  return (
    <div className="bg-white rounded-lg p-2 w-1/3">
      <h1 className="text-text text-lg font-bold">Realidade</h1>
      <BarChart
        margin={{ left: 0, right: 0 }}
        xAxis={[
          {
            id: "months",
            data: months,
            scaleType: "band",
            disableLine: true,
            disableTicks: true,
          },
        ]}
        series={[{ data: awaiting }, { data: implanted }]}
        height={250}
        borderRadius={5}
        leftAxis={null}
      />
    </div>
  );
}
