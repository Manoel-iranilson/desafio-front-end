"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.svg";
import logoWhite from "../../../../public/logo-white.svg";
import Button from "../button";
import PieChartIcon from "@mui/icons-material/PieChart";
import EqualizerSharpIcon from "@mui/icons-material/EqualizerSharp";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <div className="h-screen w-[360px] p-12 flex flex-col justify-between  bg-white">
      <section className="flex flex-col gap-14">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo-blue-company" />
          <h1 className="text-text text-3xl font-bold">Blue</h1>
        </div>
        <div className="flex flex-col gap-4">
          <Button href="/" type={pathname == "/" ? "primary" : "outline"}>
            <PieChartIcon sx={{ fontSize: 35 }} />
            Dashboard
          </Button>

          <Button
            href="/leaderboard"
            type={pathname == "/leaderboard" ? "primary" : "outline"}
          >
            <EqualizerSharpIcon sx={{ fontSize: 35 }} />
            Leaderboard
          </Button>
        </div>
      </section>
      <section className="w-full h-72 bg-card-side bg-contain  flex flex-col justify-between   bg-no-repeat text-white text-center">
        <div className="flex flex-col gap-2 justify-center items-center mt-4">
          <Image alt="logo-white-blue-company" src={logoWhite} />
          <div className="text-2xl">Conheça a Blue</div>
          <div className="text-sm mt-2">
            Saiba mais sobre a Blue, uma operadora de saúde Health Tech
          </div>
        </div>
        <div className="mb-14">
          <Button href="/" type="primary-white">
            <strong>Conheçer</strong>
          </Button>
        </div>
      </section>
    </div>
  );
}
