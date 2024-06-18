import { LineChart } from "@mui/x-charts";

export default function Lifes() {
  const lastMonths = [500, 600, 400, 400, 500, 800, 500];
  const actualMonths = [100, 200, 300, 300, 200, 600, 500];
  return (
    <div className="bg-white rounded-lg w-1/3 p-2">
      <h1 className="text-text text-xl font-bold my-2 ml-2">Vidas</h1>

      <LineChart
        title="Plataformas"
        margin={{ left: 0, right: 0 }}
        sx={{
          "& .MuiLineElement-root": {
            strokeWidth: 4,
          },
          "& .MuiAreaElement-series-lastMonths": {
            fill: "url('#myGradientLastMonths')",
          },
          "& .MuiAreaElement-series-actualMonths": {
            fill: "url('#myGradientActualMonths')",
          },
        }}
        series={[
          {
            id: "lastMonths",
            data: lastMonths,
            curve: "natural",
            area: true,
          },
          {
            id: "actualMonths",
            data: actualMonths,
            curve: "natural",
            area: true,
          },
        ]}
        leftAxis={null}
        bottomAxis={null}
        height={250}
      >
        <defs>
          <linearGradient
            id="myGradientActualMonths"
            gradientTransform="rotate(90)"
          >
            <stop offset="5%" stopColor="#2997e3" />
            <stop offset="95%" stopColor="white" />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient
            id="myGradientLastMonths"
            gradientTransform="rotate(90)"
          >
            <stop offset="5%" stopColor="#07e098" />
            <stop offset="95%" stopColor="white" />
          </linearGradient>
        </defs>
      </LineChart>

      <div className="border-t-2 border-graybold flex justify-center items-center">
        <div className="flex flex-col">
          <h1>Ultimo mês</h1> {lastMonths[0]}
        </div>
        <div className="flex flex-col">
          <h1>Este mês</h1> {actualMonths[0]}
        </div>
      </div>
    </div>
  );
}
