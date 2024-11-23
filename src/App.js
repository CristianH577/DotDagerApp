import "./App.css";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";

import NavbarCustom from "./components/NavbarCustom";
import langs from "./assets/lang.json";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Last from "./components/Last";

function App() {
  const [lang, setLang] = useState("es");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
  }, [dark]);

  return (
    <div className="min-h-screen w-full text-foreground bg-content2 dark:bg-content1 flex flex-col items-center ">
      <NavbarCustom
        dark={{ value: dark, setDark }}
        lang={{ value: lang, setLang }}
        text={langs[lang]?.NavbarCustom}
      />

      <main className="flex flex-col items-center w-full">
        <Home text={langs[lang]?.Home} />
        <Divider className="w-[80vw] " />
        <About text={langs[lang]?.About} />
        <Divider className="w-[80vw] " />
        <Contact text={langs[lang]?.Contact} />
        <Divider className="w-[80vw] " />
        <Last />
        <Footer />
      </main>
    </div>
  );
}

export default App;
