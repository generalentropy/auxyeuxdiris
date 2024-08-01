import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { minibio } from "../../config/global";
import { motion } from "framer-motion";

function Minibio() {
  useLockBodyScroll();
  const { setIsMiniBioOpen } = useGlobalContext();

  return (
    <div
      className="fixed z-40 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-70 text-primary"
      onClick={() => setIsMiniBioOpen(false)}
    >
      <motion.div
        className="m-2 flex max-w-[600px] flex-col gap-2 rounded-2xl border-8 border-white bg-lightGrey p-5 lg:gap-4 lg:p-12"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <p className="text-3xl font-bold capitalize lg:text-5xl">à propos</p>
        <p className="text-sm lg:text-lg">{minibio}</p>
      </motion.div>
    </div>
  );
}

export default Minibio;
