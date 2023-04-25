import Image from "next/image";
import logodark from "../../../public/icons/Logo-dark.svg"
import { useTheme } from "next-themes";

const Logo = () => {

  return (
    <section className="flex flex-col md:flex-row gap-4 items-center">
      <span className="p-1 rounded-md bg-primary">
        <Image
          className="h-4 w-4"
          src={logodark}
        />
      </span>
      <h1 className="font-semibold text-text-primary">Garcia Calero Dylan</h1>
    </section>
  )
};
export default Logo;