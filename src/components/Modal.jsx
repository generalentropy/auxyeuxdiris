import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useGlobalContext } from "../../contexts/useGlobalContext";
import { IoCloseCircle } from "react-icons/io5";

function Modal() {
  const { setIsNotificationOpen, modalContent } = useGlobalContext();
  const { isMobile } = useGlobalContext();
  useLockBodyScroll();

  if (!modalContent) return null;

  return (
    <div
      className="fixed z-50 flex h-screen w-screen items-center justify-center bg-primary bg-opacity-80"
      onClick={() => setIsNotificationOpen(false)}
    >
      <div className="relative m-2 flex max-h-[800px] w-full max-w-[600px] items-center justify-center rounded-2xl bg-lightGrey px-8 py-12 text-primary">
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-bold text-primary">
            {modalContent.title}
          </p>
          <p className="text-lg text-primary">{modalContent.content}</p>
        </div>
        <IoCloseCircle
          className="absolute right-2 top-2 cursor-pointer text-accent transition-colors hover:text-accentDarker lg:right-5 lg:top-5"
          size={isMobile ? 36 : 48}
        />
      </div>
    </div>
  );
}

export default Modal;
