import { Box } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface IMiniCard {
  value: string;
  label: string;
  porcent: number;
  icon: any;
  bg: string;
  color: string;
}

export default function MiniCard({
  value,
  label,
  porcent,
  icon,
  bg,
  color,
}: IMiniCard) {
  return (
    <div className={`${bg} w-full p-4 rounded-2xl flex flex-col gap-2`}>
      <div
        className={`rounded-full p-4 w-10 h-10 flex justify-center items-center ${color} `}
      >
        {icon}
      </div>
      <h2 className="text-text font-bold text-xl">{value}</h2>
      <h1 className="font-semibold text-lg"> {label}</h1>
      <h2 className="text-xs text-primary">+ {porcent}% a mais que ontem</h2>
    </div>
  );
}
