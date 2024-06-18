import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  type?: "primary" | "primary-white" | "outline";
}

export default function Button({ children, href, type = "primary" }: Props) {
  let typeClasses;

  switch (type) {
    case "primary":
      typeClasses =
        "bg-primary px-6 py-4 rounded-2xl text-white flex items-center w-full gap-5 text-xl";
      break;
    case "primary-white":
      typeClasses = "px-8 py-2 bg-white text-primary rounded-lg ";
      break;
    case "outline":
      typeClasses =
        "px-6 py-4 rounded-2xl text-graybold flex items-center w-full gap-5 text-xl";
      break;
  }

  return (
    <Link href={href} className={` ${typeClasses}`}>
      {children}
    </Link>
  );
}
