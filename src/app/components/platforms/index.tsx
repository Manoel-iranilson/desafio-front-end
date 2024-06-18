import { LineChart } from "@mui/x-charts";

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const TDConsultoria = [
  100, 200, 150, 300, 250, 350, 300, 350, 200, 300, 250, 350,
];
const RIKOPlataforma = [
  150, 100, 250, 200, 300, 250, 350, 300, 250, 200, 300, 250,
];
const BlueServicos = [
  200, 150, 300, 250, 350, 300, 200, 250, 300, 350, 200, 250,
];

export default function Platforms() {
  return (
    <div className="bg-white rounded-lg w-[40%]  p-4">
      <h1 className="text-text text-lg font-bold">Plataformas</h1>

      <LineChart
        title="Plataformas"
        sx={{
          "& .MuiLineElement-root": {
            strokeWidth: 4,
          },
        }}
        xAxis={[
          {
            id: "months",
            data: months,
            scaleType: "point",
          },
        ]}
        yAxis={[
          {
            id: "y-axis",
            min: 0,
            max: 400,
            tickInterval: [0, 100, 200, 300, 400],
          },
        ]}
        series={[
          {
            id: "TDConsultoria",
            label: "TD Consultoria",

            data: TDConsultoria,
            curve: "natural",
            showMark: false,
          },
          {
            id: "RIKOPlataforma",
            label: "RIKO Plataforma",
            data: RIKOPlataforma,
            curve: "natural",
            showMark: false,
          },
          {
            id: "BlueServicos",
            label: "Blue Serviços",
            data: BlueServicos,
            curve: "natural",
            showMark: false,
          },
        ]}
        height={250}
      />
    </div>
  );
}
