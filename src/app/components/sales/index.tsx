import MiniCard from "../miniCard";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CreateIcon from "@mui/icons-material/Create";
export default function Sales() {
  return (
    <div className="bg-white w-[60%] rounded-2xl p-8 drop-shadow-sm">
      <div className="flex justify-between">
        <div>
          <h1 className="text-text font-bold text-lg">Vendas hoje</h1>
          <h2 className="text-graybold mt-4">Resumo de vendas</h2>
        </div>
        <div className="border rounded-lg flex justify-center items-center px-4">
          Exportar
        </div>
      </div>
      <div className="flex gap-8 mt-[5%]">
        <MiniCard
          porcent={8}
          value="R$ 1000"
          label="Total de vendas"
          icon={<AssessmentRoundedIcon style={{ fill: "#fff" }} />}
          color="bg-red"
          bg="bg-redLigth"
        />
        <MiniCard
          porcent={5}
          value="300"
          label="Total de contratos"
          icon={<DescriptionRoundedIcon style={{ fill: "#fff" }} />}
          color="bg-yellow"
          bg="bg-yellowLigth"
        />
        <MiniCard
          porcent={1.2}
          value="5"
          label="Implantados"
          icon={<PersonAddIcon style={{ fill: "#fff" }} />}
          color="bg-green"
          bg="bg-greenLigth"
        />
        <MiniCard
          porcent={0.5}
          value="8"
          label="Novos contratos"
          icon={<CreateIcon style={{ fill: "#fff" }} />}
          color="bg-purple"
          bg="bg-purpleLigth"
        />
      </div>
    </div>
  );
}
