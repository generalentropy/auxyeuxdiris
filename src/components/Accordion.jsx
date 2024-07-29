import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";

function Accordion() {
  return (
    <div className="mb-10 flex justify-center">
      <AccordionItem />{" "}
    </div>
  );
}

export default Accordion;

function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={classNames(
          "flex cursor-pointer select-none rounded-t-2xl bg-accent px-4 py-6 text-xl font-semibold text-white",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        Qu&lsquo;est-ce que l&lsquo;extension de cils ?
      </div>
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="rounded-b-2xl bg-lightGrey px-4 py-6">
          C&lsquo;est une méthode sud-coréenne datant des années 90, permettant
          d&lsquo;allonger, étoffer et courber la base ciliaire, à l&lsquo;aide
          de prothèses adaptées à la forme du cil naturel. Ces prothèses
          (extensions) sont donc collées sur chacun de vos cils naturels
          adultes, dans le prolongement de celui-ci, à environ un demi
          millimètre de votre paupière.
        </div>
      </motion.div>
    </div>
  );
}
