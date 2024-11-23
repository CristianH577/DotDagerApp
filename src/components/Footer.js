import { Button, Divider, Image } from "@nextui-org/react";
import Redes from "./Redes";

function Footer() {
  const contextImg = require.context("../assets/footer", true);
  return (
    <footer className="min-h-12 w-full bg-background shadow-inner flex flex-col items-center border-t border-divider">
      <Redes
        className={"my-8 gap-8 flex-wrap"}
        classNames={{ link: "text-4xl p-4" }}
      />

      <div className="relative flex justify-end items-center mb-4 shadow-medium">
        <Image src={contextImg(`./lumber1.webp`)} className="max-w-64" />
        <Button
          isIconOnly
          className="absolute h-16 w-16 right-7 z-10 rounded-full bg-transparent hover:scale-125"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Image
            src={contextImg(`./lumber2.webp`)}
            className=""
            removeWrapper
          />
        </Button>
      </div>

      <Divider className="w-[80%]" />

      <div className="flex gap-1 py-2 text-neutral-500 self-center mt-auto">
        <p>2024</p>
        <p>©VerdeAve</p>
      </div>
    </footer>
  );
}

export default Footer;
