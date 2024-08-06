import Button from "./Button";
import { headerTextGradient } from "../../config/style";
import { useGlobalContext } from "../../contexts/useGlobalContext";

function Header() {
  const { setFormObject } = useGlobalContext();

  return (
    <div className="flex max-h-[660px] overflow-hidden rounded-2xl bg-lightGrey bg-contain bg-right bg-no-repeat p-4 xs:p-8 sm:bg-[url('/images/hero.svg')] lg:py-12 xl:h-full">
      <div className="justify-left flex items-center sm:max-w-[360px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[780px]">
        <div className="flex flex-col space-y-4 xl:ml-20 xl:space-y-12">
          <div className="text-2xl font-bold text-primary xs:text-4xl md:text-5xl lg:text-7xl">
            Votre <span className={headerTextGradient}>expert</span> en
            extensions de cils depuis{" "}
            <span className={headerTextGradient}>2017</span>
          </div>
          <div className="max-w-[600px] text-sm text-primary xs:text-lg xl:text-2xl">
            Sculptez votre regard grâce à des techniques respectueuses de vos
            cils naturels.
          </div>

          <Button
            onClick={() => setFormObject("Prise de rendez-vous")}
            hashLink="#contact"
            text="Réserver"
            buttonStyle={"hover:bg-accentDarker transition-colors"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
