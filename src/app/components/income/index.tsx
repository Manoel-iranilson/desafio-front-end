import { BarChart } from "@mui/x-charts";

export default function Income() {
  const week = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];
  const awaiting = [7000, 12000, 15000, 8000, 25000, 18000, 10000];
  const implanted = [22000, 7000, 14000, 19000, 11000, 23000, 6000];

  const formatYAxisTick = (value: number) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return value.toString();
  };

  return (
    <div className="bg-white rounded-lg w-2/3  p-8">
      <h1 className="text-text text-lg font-bold">Rendimento total</h1>
      <BarChart
        margin={{ left: 30, right: 0 }}
        xAxis={[
          {
            id: "week",
            data: week,
            scaleType: "band",
            disableLine: true,
            disableTicks: true,
          },
        ]}
        yAxis={[
          {
            id: "y-axis",
            min: 0,
            max: 25000,
            tickInterval: [0, 5000, 10000, 15000, 20000, 25000],
            valueFormatter: formatYAxisTick,
            disableLine: true,
            disableTicks: true,
          },
        ]}
        series={[{ data: awaiting }, { data: implanted }]}
        height={250}
        borderRadius={5}
      />
    </div>
  );
}
