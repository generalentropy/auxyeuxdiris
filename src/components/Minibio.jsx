import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { minibio } from "../../config/global";

function Minibio() {
  useLockBodyScroll();
  const { setIsMiniBioOpen } = useGlobalContext();

  return (
    <div
      className="fixed z-40 flex h-screen w-screen items-center justify-center bg-lightGrey bg-opacity-80"
      onClick={() => setIsMiniBioOpen(false)}
    >
      <div className="m-2 flex flex-col gap-2 rounded-2xl border-8 border-white bg-lightGrey p-5">
        <p className="text-3xl font-bold capitalize text-primary">à propos</p>
        <p className="text-sm">{minibio}</p>
      </div>
    </div>
  );
}

export default Minibio;
