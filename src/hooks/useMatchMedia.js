import { useEffect, useState } from "react";

export function useMatchMedia() {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    let myFunction = (x) => {
      if (x.matches) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };
    let x = window.matchMedia("(min-width: 550px)");
    myFunction(x); // Call listener function at run time
    x.addEventListener("change", myFunction);
  }, []);

  return isDesktop;
}
