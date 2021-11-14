import Icon from "@mdi/react";
import { mdiLaptop, mdiDotsVertical } from "@mdi/js";
import { Toggle } from "./Toggle";
import { NavbarMobile } from "./NavbarMobile";
import { useState } from "react";

export function HeaderMobile() {
  const [view, setView] = useState(false);

  return (
    <>
      {view && <NavbarMobile setView={setView} />}
      <nav className="fixed bottom-0 w-full flex justify-between py-4 px-5">
        <Icon
          path={mdiLaptop}
          size={1.1}
          className="text-green-800 dark:text-green-300"
        />
        <div className="flex">
          <Toggle />
          <button onClick={() => setView(!view)}>
            <Icon
              path={mdiDotsVertical}
              size={1.1}
              className="text-green-800 dark:text-green-300 ml-3"
            />
          </button>
        </div>
      </nav>
    </>
  );
}
