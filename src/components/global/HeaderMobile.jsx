import Icon from "@mdi/react";
import Image from "next/image";
import { mdiDotsVertical } from "@mdi/js";
import Link from "next/link";
// import { Toggle } from "./Toggle";
import { NavbarMobile } from "./NavbarMobile";
import { useState } from "react";
import Logo from "@/static/logo.svg";

export function HeaderMobile() {
  const [view, setView] = useState(false);

  return (
    <>
      {view && <NavbarMobile setView={setView} />}
      <nav className="fixed bottom-0 z-50 w-full flex justify-between py-4 px-5 bg-white-400 drop-shadow-sm">
        <Link href="/">
          <a>
            <Image src={Logo} width={30} height={30} alt="g1alexander" />
          </a>
        </Link>
        <div className="flex">
          {/* <Toggle /> */}
          <button onClick={() => setView(!view)}>
            <Icon
              path={mdiDotsVertical}
              size={1.1}
              className="text-black-300 ml-3"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
