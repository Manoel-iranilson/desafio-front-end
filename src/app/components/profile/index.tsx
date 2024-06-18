import Image from "next/image";
import avatar from "../../../../public/avatar.svg";

export default function Profile() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Image src={avatar} alt="avatar" width={80} />
      <div>
        <div className="text-text font-bold">Paolo freire</div>
        <div className="text-graybold text-sm">Comercial</div>
      </div>
    </div>
  );
}
