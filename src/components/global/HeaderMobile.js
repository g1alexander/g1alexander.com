import Icon from "@mdi/react";
import { mdiLaptop, mdiDotsVertical } from "@mdi/js";
import { Toggle } from "./Toggle";

export function HeaderMobile() {
  return (
    <nav className="fixed bottom-0 w-full flex justify-between py-4 px-5">
      <Icon
        path={mdiLaptop}
        size={1.1}
        className="text-green-800 dark:text-green-300"
      />
      <div className="flex">
        <Toggle />
        <Icon
          path={mdiDotsVertical}
          size={1.1}
          className="text-green-800 dark:text-green-300 ml-3"
        />
      </div>
    </nav>
  );
}
