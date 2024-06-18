import Image from "next/image";
import SearchForm from "../searchForm";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SelectCustom from "../select";
import { useState } from "react";
import Profile from "../profile";

export default function NavBar() {
  return (
    <div className=" bg-white flex p-6 items-center justify-between">
      <div className="w-1/3">
        <h1 className="text-3xl font-bold text-text">Dashboard</h1>
      </div>
      <div className="flex w-2/3 justify-center items-center gap-4">
        <SearchForm />
        <SelectCustom />

        <div className="bg-orangeLigth flex justify-center items-center w-12 rounded h-12 relative ">
          <div className="h-[6px] w-[6px] bg-[#FF6347] rounded-full absolute left-8 bottom-8" />
          <NotificationsOutlinedIcon style={{ fill: "#ffaf2f" }} />
        </div>
        <Profile />
      </div>
    </div>
  );
}
