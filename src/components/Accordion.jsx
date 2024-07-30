import classNames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqData } from "../../config/global";
import { FaChevronDown } from "react-icons/fa";

function Accordion() {
  return (
    <div className="mb-10 flex flex-col justify-center">
      {faqData.map((item, i) => (
        <AccordionItem
          question={item.question}
          answer={item.answer}
          key={i}
          list={item.list}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ question, answer, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={classNames(
          "text-md flex cursor-pointer select-none items-center justify-between rounded-2xl bg-accent px-4 py-6 font-semibold text-white xs:text-lg lg:text-xl",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{question}</p>
        <motion.div
          className="ml-2"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaChevronDown size={28} />
        </motion.div>
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
        <div className="rounded-2xl bg-lightGrey px-4 py-6 lg:p-12">
          {answer && <p className={classNames({ "pb-4": list })}>{answer}</p>}
          {Array.isArray(list) && list.length > 0 && (
            <ul>
              {list.map((el, i) => (
                <li
                  className="mb-2 text-sm text-primary xs:text-base lg:mb-4"
                  key={i}
                >
                  👉 {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </div>
  );
}
