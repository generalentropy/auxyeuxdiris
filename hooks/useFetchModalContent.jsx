import { useEffect, useState, useCallback } from "react";
import { fetchDocuments } from "../lib/appwriteClient";
import { useGlobalContext } from "../contexts/useGlobalContext";

const useFetchModalContent = () => {
  const { setModalContent, setIsNotificationActive } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const refetch = useCallback(() => {
    setTrigger((prev) => prev + 1);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchModal = async () => {
      setLoading(true);
      try {
        const modalData = await fetchDocuments();
        if (isMounted && modalData) {
          setModalContent(modalData[0]);
          setIsNotificationActive(modalData[0].modalStatus);
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setError(error);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchModal();

    return () => {
      isMounted = false;
    };
  }, [setModalContent, setIsNotificationActive, trigger]);

  return { loading, error, refetch };
};

export default useFetchModalContent;
