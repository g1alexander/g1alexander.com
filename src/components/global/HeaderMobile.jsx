import Icon from "@mdi/react";
import Image from "next/image";
import { mdiDotsVertical } from "@mdi/js";
import Link from "next/link";
import { Toggle } from "./Toggle";
import { NavbarMobile } from "./NavbarMobile";
import { useState } from "react";
import LogoDark from "@/static/logo-dark.svg";
import Logo from "@/static/logo.svg";
import { GlobalContext } from "@/utils/getGlobalContext";
import { useContext } from "react";

export function HeaderMobile() {
  const [view, setView] = useState(false);

  const global = useContext(GlobalContext);

  return (
    <>
      {view && <NavbarMobile setView={setView} />}
      <nav className="fixed bottom-0 z-50 w-full flex justify-between py-4 px-5 bg-white-400 dark:bg-dark-700 drop-shadow-sm">
        <Link href="/">
          <a>
            <Image
              src={global.darkMode ? LogoDark : Logo}
              width={30}
              height={30}
              alt="g1alexander"
            />
          </a>
        </Link>
        <div className="flex gap-2">
          <Toggle />
          <button className="px-1" onClick={() => setView(!view)}>
            <Icon
              path={mdiDotsVertical}
              size={1.1}
              className="text-black-300 dark:text-dark-100"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
