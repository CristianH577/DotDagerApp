import { motion } from "framer-motion";

import { Link } from "@nextui-org/react";

import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { TbBrandFiverr } from "react-icons/tb";

function Contact({ text }) {
  const items = [
    {
      text: "DotDager@Gmail.com",
      icon: <IoMdMail />,
    },
    {
      text: "Linkedin",
      link: "https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US",
      icon: <IoLogoLinkedin />,
    },
    {
      text: "Fiverr",
      link: "https://www.fiverr.com/marianovilla807",
      icon: <TbBrandFiverr />,
    },
  ];
  return (
    <section
      id="contact"
      className="w-full py-20 flex flex-col items-center gap-4"
    >
      <h1 className="font-semibold text-4xl text-warning">{text?.title}</h1>

      <article className="flex flex-wrap justify-center gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ ease: "linear", duration: 1 }}
          >
            <Link
              color="foreground"
              href={item?.link || null}
              target="_blank"
              className="gap-2 text-xl ms-4"
            >
              {item.icon}
              {item.text}
            </Link>
          </motion.div>
        ))}
      </article>
    </section>
  );
}

export default Contact;
