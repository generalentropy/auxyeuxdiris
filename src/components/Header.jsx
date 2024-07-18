import Button from "./Button";

const customGradient =
  "bg-gradient-to-r from-accent to-[#BB8C02] bg-clip-text text-transparent";

function Header() {
  return (
    <div className="flex h-full max-h-[660px] overflow-hidden rounded-2xl bg-lightGrey bg-[url('/images/hero.svg')] bg-contain bg-right bg-no-repeat">
      <div className="justify-left flex max-w-[780px] items-center">
        <div className="ml-20 flex flex-col space-y-12">
          <div className="text-7xl font-bold text-primary">
            Votre <span className={customGradient}>expert</span> en extensions
            de cils depuis <span className={customGradient}>2017</span>
          </div>
          <div className="max-w-[600px] text-2xl font-normal text-primary">
            Sculptez votre regard grâce à des techniques respectueuses de vos
            cils naturels.
          </div>

          <Button
            text="Réserver"
            buttonStyle={"hover:bg-accentDarker transition-colors"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
