import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { motion } from "framer-motion";
import { minibio } from "../../data/data";
import { IoCloseCircle } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

function Minibio() {
  useLockBodyScroll();
  const { setIsMiniBioOpen } = useGlobalContext();
  const isMobile = useMediaQuery({ maxWidth: 768 }); // TW md breakpoint

  return (
    <div
      className="fixed z-40 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-70 text-primary"
      onClick={() => setIsMiniBioOpen(false)}
    >
      <motion.div
        className="relative m-3 flex max-w-[600px] flex-col gap-2 rounded-2xl border-8 border-white bg-lightGrey p-3 xs:m-5 xs:p-5 md:gap-4 md:p-12"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <IoCloseCircle
          className="absolute right-2 top-2 cursor-pointer text-accent transition-colors hover:text-accentDarker lg:right-5 lg:top-5"
          size={isMobile ? 32 : 48}
        />
        <p className="text-3xl font-bold capitalize md:text-5xl">à propos</p>
        <p className="text-sm md:text-lg">{minibio}</p>
      </motion.div>
    </div>
  );
}

export default Minibio;
