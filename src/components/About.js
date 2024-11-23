import { useState } from "react";
import { motion } from "framer-motion";

import { Button, Image, Tooltip } from "@nextui-org/react";

import { GiPickle } from "react-icons/gi";

import mmm from "../assets/mmm.webp";

function About({ text }) {
  const contextImg = require.context("../assets/about", true);
  const items = [
    "programming",
    "cats",
    "guitars",
    "philosophy",
    "pickles",
    "jokes",
  ];

  const [active, setActive] = useState(null);

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center gap-8 py-20 "
    >
      <motion.article
        className="flex flex-col items-center gap-4 sm:flex-row px-4"
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src={contextImg(`./picture2.webp`)} className="sm:min-w-96" />
        <div>
          <h2 className="font-semibold text-3xl text-warning">{text?.title}</h2>
          <p className="max-md:max-w-4/5 max-lg:text-2xl max-lg:ps-3">
            {text?.description}
          </p>
        </div>
      </motion.article>

      <motion.article
        className="grid sm:grid-cols-2 sm:justify-center gap-4 w-full "
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              delayChildren: 1,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="initial"
        animate="animate"
      >
        {items.map((item) => (
          <motion.div
            key={item}
            className="w-full min-h-32 sm:min-w-72 text-white p-3 shadow-medium relative group transition-all overflow-hidden flex flex-col justify-center "
            style={{
              backgroundImage: `url(${contextImg(`./${item}.webp`)})`,
              backgroundPosition: item === "philosophy" ? "top" : "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              textShadow: "0px 0px 5px black",
            }}
            data-active={active === item}
            onClick={() =>
              active === item ? setActive(null) : setActive(item)
            }
            initial={{
              height: 128,
              scale: 0,
              opacity: 0,
            }}
            whileHover={{
              height: 128 * 2.5,
            }}
            animate={{
              height: active === item ? 128 * 2.5 : 128,
            }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ ease: "linear", duration: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="h-full w-full absolute blur-lg bg-white/30 left-0"></div>
            <h3
              className="font-semibold z-10 text-4xl flex items-center gap-2"
              data-active={active === item}
            >
              {text?.items?.[item]?.title}
              {item === "pickles" && (
                <Tooltip
                  content={
                    <Image
                      src={mmm}
                      removeWrapper
                      className="shadow-md h-[150px]"
                    />
                  }
                  className="p-0"
                >
                  <Button isIconOnly className="p-0" variant="">
                    <GiPickle className="w-full h-full text-lime-500" />
                  </Button>
                </Tooltip>
              )}
            </h3>
            <p
              className="z-10 hidden xs:group-hover:flex data-[active=true]:flex transition-all"
              data-active={active === item}
            >
              {text?.items?.[item]?.desc}.
            </p>
          </motion.div>
        ))}
      </motion.article>

      {/* <article className="w-full flex flex-col sm:flex-row">
        <Accordion>
          {items.slice(0, 3).map((item) => (
            <AccordionItem
              key={item}
              className="min-h-32 sm:min-w-72 text-white p-3  relative g flex flex-col justify-center"
              style={{
                backgroundImage: `url(${contextImg(`./${item}.webp`)})`,
                backgroundPosition: item === "philosophy" ? "top" : "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                textShadow: "0px 0px 5px black",
              }}
              aria-label={text?.items?.[item]?.title}
              title={text?.items?.[item]?.title}
              classNames={{
                title: "text-3xl font-semibold",
              }}
            >
              <p className="z-20 ">{text?.items?.[item]?.desc}.</p>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion>
          {items.slice(3, 6).map((item) => (
            <AccordionItem
              key={item}
              className="min-h-32 sm:min-w-72 text-white p-3  relative g flex flex-col justify-center"
              style={{
                backgroundImage: `url(${contextImg(`./${item}.webp`)})`,
                backgroundPosition: item === "philosophy" ? "top" : "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                textShadow: "0px 0px 5px black",
              }}
              aria-label={text?.items?.[item]?.title}
              title={text?.items?.[item]?.title}
              classNames={{
                title: "text-3xl font-semibold",
              }}
            >
              <p className="z-20 ">{text?.items?.[item]?.desc}.</p>
            </AccordionItem>
          ))}
        </Accordion>
      </article> */}
    </section>
  );
}

export default About;
