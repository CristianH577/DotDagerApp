import { useEffect, useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Image,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

import { IoIosSunny, IoMdMoon } from "react-icons/io";
import Redes from "./Redes";

function NavbarCustom({ dark, lang, text }) {
  const menuItems = ["about", "contact"];
  const contextImg = require.context("../assets/", true);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const updateHashText = () => {
      setCurrent(window.location.hash);
    };

    updateHashText();

    window.addEventListener("hashchange", updateHashText);

    return () => {
      window.removeEventListener("hashchange", updateHashText);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      position="sticky"
      isBordered
      className="shadow-lg z-50 "
      // bg-gradient-to-t to-custom from-custom/70 dark:to-custom-dark dark:from-custom-dark/50
      classNames={{
        item: "data-[active=true]:!text-warning",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? text?.ariaClose : text?.ariaOpen}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link
            color="foreground"
            className="font-bold text-xl "
            href={`#`}
            onPress={() => setIsMenuOpen(false)}
          >
            DotDager
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item} isActive={current.includes(item)}>
            <Link
              color="foreground"
              href={`#${item}`}
              data-active={current.includes(item)}
              className="data-[active=true]:!text-warning"
              // data-[active=true]:!text-custom-text dark:data-[active=true]:!text-warning
            >
              {text?.menuItems?.[item]}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <Button
            isIconOnly
            variant=""
            className="text-xl"
            onPress={() => dark.setDark(!dark.value)}
          >
            {dark.value ? (
              <IoIosSunny className="text-yellow-400" />
            ) : (
              <IoMdMoon className="text-default-500" />
            )}
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Select
            aria-label="asfdasdf"
            size="sm"
            label=""
            variant="underlined"
            className="min-w-24 hidden xs:block"
            classNames={{ listbox: "dark:text-foreground" }}
            selectedKeys={[lang.value]}
            onSelectionChange={(e) => lang.setLang(e.currentKey)}
            renderValue={(item) => {
              return (
                <div className="uppercase flex gap-1 items-center">
                  <Image
                    src={contextImg(`./flags/${lang.value}.svg`)}
                    radius="none"
                    removeWrapper
                    className="h-4 w-auto"
                  />
                  {lang.value}
                </div>
              );
            }}
          >
            {["es", "en"].map((item) => (
              <SelectItem key={item} textValue={item}>
                <div className="uppercase flex gap-1 items-center">
                  <Image
                    src={contextImg(`./flags/${item}.svg`)}
                    radius="none"
                    removeWrapper
                    className="h-4 w-auto"
                  />
                  {item}
                </div>
              </SelectItem>
            ))}
          </Select>
        </NavbarItem>

        <NavbarItem className="hidden xl:block">
          <Redes classNames={{ link: "bg-transparent shadow-none" }} />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item}`}>
            <Link
              color="foreground"
              size="lg"
              href={`#${item}`}
              data-active={current.includes(item)}
              className="data-[active=true]:!text-warning w-full border-b py-2"
              onPress={() => setIsMenuOpen(false)}
            >
              {text?.menuItems?.[item]}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarCustom;
