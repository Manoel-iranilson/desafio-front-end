"use client";
import Image from "next/image";
import SideBar from "./components/sideBar";
import MiniCared from "./components/miniCard";
import MiniCard from "./components/miniCard";
import Sales from "./components/sales";
import { LineChart } from "@mui/x-charts";
import Platforms from "./components/platforms";
import Income from "./components/income";
import Lifes from "./components/lifes/index.";
import Reality from "./components/reality";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray p-8 rounded-lg ">
      <div className="flex gap-8 w-full">
        <Sales />
        <Platforms />
      </div>
      <div className="flex gap-8 mt-10">
        <Income />
        <Lifes />
        <Reality />
      </div>
    </main>
  );
}
