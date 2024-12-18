import { motion } from "framer-motion";

import Redes from "./Redes";

import avatar from "../assets/avatar.jpg";

function Home({ text }) {
  return (
    <section className="flex flex-col justify-evenly lg:flex-row gap-4 lg:gap-0 items-center p-2 pt-8 sm:p-8 lg:px-8 w-full max-w-none lg:justify-start h-[calc(100vh-4rem)] font-[menulis] ">
      <article className="w-full h-full flex flex-col items-center justify-center gap-2 lg:min-w-[520px]">
        <motion.div
          className="max-lg:text-center"
          variants={{
            initial: { y: "-100%", opacity: 0 },
            animate: { y: 0, opacity: 1 },
          }}
          initial="initial"
          animate="animate"
          transition={{
            duration: 1,
            // delayChildren: 3,
            // staggerChildren: 0.2,
          }}
        >
          <div className="font-[calvera]">
            <h3>Yo soy</h3>
            <motion.h2
              className="text-[50px] text- text-transparent min-h-[75px] w-full"
              style={{
                background:
                  "linear-gradient(to top, hsl(var(--nextui-secondary)), #836491)",
                backgroundClip: "text",
              }}
              // initial={{ opacity: 0, scaleX: 0 }}
              // animate={{ opacity: 1, scaleX: "100%" }}
              // transition={{ delay: 1 }}
            >
              Dot Dager
            </motion.h2>
            <h3>y vos no</h3>
          </div>

          <div className="overflow-hidden my-2 ">
            <motion.div
              className="text-[35px] xs:text-[45px] sm:text-[60px] md:text-[80px] capitalize h-[160px] "
              initial={{ y: 0 }}
              animate={{ y: [0, -160] }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                repeatType: "reverse",
                repeat: Infinity,
                repeatDelay: 1,
                delay: 1,
              }}
            >
              <h1
                className="min-h-[160px] flex items-center justify-center text-danger "
                style={{ lineHeight: "1", maxLines: 2 }}
              >
                {text?.title1}
              </h1>
              <h1
                className="min-h-[160px] flex items-center justify-center text-warning"
                style={{ lineHeight: "1" }}
              >
                Full-Stack Senior
              </h1>
            </motion.div>
          </div>
        </motion.div>

        <Redes className="w-full lg:justify-start" />
      </article>

      <motion.div
        className="h-full w-full max-w-[900px] bg-contain xl:bg-cover "
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      ></motion.div>
      {/* <motion.div
        className="h-full w-full max-w-[900px] flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <Image src={avatar} radius="none" className="h-2/3 w-auto" />
      </motion.div> */}
    </section>
  );
}

export default Home;
