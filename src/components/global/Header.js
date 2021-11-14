import { HeaderDesktop } from "@/components/global/HeaderDesktop";
import { HeaderMobile } from "@/components/global/HeaderMobile";
import { useMatchMedia } from "@/hooks/useMatchMedia";

export function Header() {
  const isDesktop = useMatchMedia();

  return <>{isDesktop ? <HeaderDesktop /> : <HeaderMobile />}</>;
}
