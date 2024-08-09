import { useEffect } from "react";
import { fetchDocuments } from "../lib/appwriteClient";
import { useGlobalContext } from "../contexts/useGlobalContext";

const useFetchModalContent = () => {
  const { setModalContent, setIsNotificationActive } = useGlobalContext();

  useEffect(() => {
    const fetchModal = async () => {
      try {
        const modalData = await fetchDocuments();
        if (modalData) {
          setModalContent(modalData[0]);
          setIsNotificationActive(modalData[0].modalStatus);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchModal();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setModalContent, setIsNotificationActive]);
};

export default useFetchModalContent;
