import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { useGlobalContext } from "../../contexts/useGlobalContext";

function About() {
  return (
    <div className="mb-10 flex flex-col sm:h-full sm:max-h-[570px] sm:flex-row">
      <div className="flex flex-col items-center justify-around rounded-t-2xl bg-accent py-8 sm:min-w-[50%] sm:rounded-none sm:rounded-l-2xl xl:min-w-[530px]">
        <div className="text-4xl font-bold text-white lg:text-6xl">
          Qui suis-je ?
        </div>

        <div className="flex flex-col items-center">
          <div className="pt-6 text-2xl font-extrabold text-primary sm:text-4xl">
            José Chédotal
          </div>
          <div className="text-xl font-light italic text-white sm:text-2xl xl:text-3xl">
            Lash Stylist
          </div>
          <div className="py-4 text-lg font-bold text-accentDarkest sm:text-xl">
            Cil à Cil & Volume Russe
          </div>
        </div>

        <MinibioButton />
      </div>
      <div className="grow overflow-hidden rounded-b-2xl sm:rounded-none sm:rounded-r-2xl">
        <img
          src="/images/jose.jpg"
          className="h-full w-full object-cover"
          alt="Photo de José"
        />
      </div>
    </div>
  );
}

export default About;

function MinibioButton() {
  const { setIsMiniBioOpen } = useGlobalContext();

  return (
    <div className="flex">
      <div
        onClick={() => setIsMiniBioOpen(true)}
        className="text-md h flex cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-2 font-bold text-white xl:px-16 xl:py-3 xl:text-xl"
      >
        Lire plus <HiMiniDocumentMagnifyingGlass className="ml-2" />
      </div>
    </div>
  );
}
