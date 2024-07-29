import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqData } from "../../config/global";

function Accordion() {
  return (
    <div className="mb-10 flex flex-col justify-center">
      {faqData.map((item, i) => (
        <AccordionItem question={item.question} answer={item.answer} key={i} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={classNames(
          "flex cursor-pointer select-none rounded-b-2xl rounded-t-2xl bg-accent px-4 py-6 text-xl font-semibold text-white",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          marginBottom: isOpen ? "10px" : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <div className="rounded-2xl bg-lightGrey px-4 py-6">{answer}</div>
      </motion.div>
    </div>
  );
}
