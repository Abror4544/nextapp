import Image from "next/image";

const Preloader = () => (
  <Image data-testid="img" width={100} height={100} src="/loader.gif" alt="Preloader" />
);

export default Preloader;
