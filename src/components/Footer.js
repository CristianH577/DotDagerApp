import { motion } from "framer-motion";
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

      <motion.div
        className="relative flex justify-end items-center mb-4 "
        variants={{
          initial: {
            opacity: 0,
            scale: 0,
          },
          whileInView: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 2,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="initial"
        whileInView="whileInView"
        transition={{ ease: "linear", duration: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image
          src={contextImg(`./lumber1.webp`)}
          className="max-w-64 shadow-md"
        />

        <motion.div
          className="flex items-center justify-center z-10 absolute h-16 w-16 right-7 hover:scale-125"
          initial={{
            scale: 0,
            opacity: 0,
            rotate: 180,
          }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ ease: "linear", duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Button
            isIconOnly
            className="h-full w-full rounded-full bg-transparent hover:scale-125 "
            onClick={() => window.scrollTo(0, 0)}
          >
            <Image
              src={contextImg(`./lumber2.webp`)}
              className=""
              removeWrapper
            />
          </Button>
        </motion.div>
      </motion.div>

      <Divider className="w-[80%]" />

      <div className="flex gap-1 py-2 text-neutral-500 self-center mt-auto">
        <p>2024</p>
        <p>©VerdeAve</p>
      </div>
    </footer>
  );
}

export default Footer;
