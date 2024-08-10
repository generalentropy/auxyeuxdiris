import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { IoCloseCircle } from "react-icons/io5";

function Modal({ title, content, isOpen, callback }) {
  const { setIsNotificationOpen, modalContent } = useGlobalContext();
  const { isMobile } = useGlobalContext();
  useLockBodyScroll();

  const displayTitle = title || modalContent?.title;
  const displayContent = content || modalContent?.content;

  const handleClose = () => {
    setIsNotificationOpen(false);

    if (callback) {
      callback();
    }
  };

  if (!isOpen && !displayTitle && !displayContent) return null;

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-80"
      onClick={handleClose}
    >
      <div className="relative m-2 flex w-full max-w-[700px] items-center justify-center rounded-2xl border-8 border-white bg-lightGrey px-3 pb-5 pt-10 text-primary xs:px-4 md:px-10 md:py-20">
        <div className="flex flex-col gap-2 md:gap-3">
          <p className="text-2xl font-bold text-primary md:text-5xl">
            {displayTitle}
          </p>
          <p className="text-sm text-primary xs:text-base md:text-lg">
            {displayContent}
          </p>
        </div>
        <IoCloseCircle
          className="absolute right-2 top-2 cursor-pointer text-accent transition-colors hover:text-accentDarker lg:right-5 lg:top-5"
          size={isMobile ? 36 : 48}
          onClick={handleClose}
        />
      </div>
    </div>
  );
}

export default Modal;
