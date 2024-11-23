import { motion } from "framer-motion";

import { Link } from "@nextui-org/react";
import { FaInstagram, FaGithub, FaYoutube, FaDiscord } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Redes({ classNames, className }) {
  const redes = [
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@DotDager",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/dager.32/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/MarianoVilla",
    },
    {
      icon: <FaXTwitter />,
      link: "https://x.com/Dager_32",
    },
    {
      icon: <FaDiscord />,
      link: "https://discord.com/invite/4NFk6TamAB",
    },
  ];
  return (
    <motion.div
      className={`flex gap-2 justify-center ${className || ""}`}
      variants={{
        initial: {
          scale: 0,
          opacity: 0,
        },
        // animate
        animate: {
          scale: 1,
          opacity: 1,
          transition: {
            delayChildren: 1,
            staggerChildren: 0.2,
          },
        },
        // viewport: { once: true, amount: 0.5 },
        // transition: { ease: "linear", duration: 0.1 },
      }}
      initial="initial"
      animate="animate"
    >
      {redes.map((item, i) => (
        <motion.div
          key={i}
          variants={{
            initial: {
              opacity: 0,
              scale: 1.5,
            },
            animate: {
              opacity: 1,
              scale: 1,
            },
          }}
        >
          <Link
            href={item.link}
            target="_blank"
            className={`bg-divider rounded-full text-foreground p-2 cursor-pointer hover:bg-secondary transition-all hover:text-warning shadow-md ${
              classNames?.link || ""
            }`}
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Redes;
