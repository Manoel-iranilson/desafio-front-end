"use client";

import { FormControl, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { ArrowDropDown } from "@mui/icons-material";
import { useState } from "react";
import pt from "../../../../public/languages/br.svg";
import es from "../../../../public/languages/es.svg";
import us from "../../../../public/languages/us.svg";

export default function SelectCustom() {
  const [language, setlanguage] = useState<string>("pt-br");

  const handleChange = (event: any) => {
    setlanguage(event.target.value);
  };

  return (
    <FormControl className="w-40" variant="standard">
      <Select
        value={language}
        onChange={handleChange}
        displayEmpty
        IconComponent={ArrowDropDown}
        className="border-none"
      >
        <MenuItem value="pt-br" className="flex gap-4 w-full">
          <Image
            src={pt}
            alt="bandeira-brasil"
            width={30}
            height={30}
            className="rounded-full"
          />
          PT(BR)
        </MenuItem>
        <MenuItem value="en" className="flex gap-4">
          <Image
            src={us}
            alt="bandeira-EUA"
            width={30}
            height={30}
            className="rounded-full"
          />
          EN(EUA)
        </MenuItem>
        <MenuItem value="es" className="flex gap-4 p-4">
          <Image
            src={es}
            alt="bandeira-espanha"
            width={100}
            height={100}
            className="rounded-full"
          />
          ES(ES)
        </MenuItem>
      </Select>
    </FormControl>
  );
}
