import Button from "./Button";

function Header() {
  return (
    <div className="bg-lightGrey flex h-full max-h-[660px] overflow-hidden rounded-3xl bg-[url('/images/hero.svg')] bg-contain bg-right bg-no-repeat">
      <div className="justify-left flex max-w-[780px] items-center">
        <div className="ml-20 flex flex-col space-y-12">
          <div className="text-primary text-7xl font-bold">
            Votre expert en extensions de cils depuis 2017
          </div>
          <div className="text-primary max-w-[600px] text-2xl font-normal">
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
