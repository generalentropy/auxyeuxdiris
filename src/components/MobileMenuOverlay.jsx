import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";

function MobileMenuOverlay() {
  const linkStyle = `relative text-4xl w-fit block after:block after:content-[''] after:absolute after:h-[6px] after:bg-accent after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white font-bold`;
  useLockBodyScroll();

  const { setIsMobileMenuOpen, isMobileMenuOpen } = useGlobalContext();
  const handleOpenMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="fixed z-20 flex h-screen w-screen items-center justify-center bg-primary xl:hidden">
      <nav>
        <ul className="flex max-h-[400px] flex-col items-center justify-center gap-4">
          <li>
            <a className={linkStyle} href="#tarifs" onClick={handleOpenMenu}>
              Prestations
            </a>
          </li>

          <li>
            <a className={linkStyle} href="#tarifs" onClick={handleOpenMenu}>
              Tarifs
            </a>
          </li>

          <li>
            <a href="#contact" className={linkStyle} onClick={handleOpenMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="#nous-situer"
              className={linkStyle}
              onClick={handleOpenMenu}
            >
              Nous situer
            </a>
          </li>
          <li>
            <a
              href="#realisations"
              className={linkStyle}
              onClick={handleOpenMenu}
            >
              Réalisations
            </a>
          </li>
          <li>
            <a className={linkStyle} href="#faq" onClick={handleOpenMenu}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenuOverlay;
