import { useEffect, useState, useCallback } from "react";
import { fetchDocuments } from "../lib/appwriteClient";
import { useGlobalContext } from "../contexts/useGlobalContext";

const useFetchModalContent = () => {
  const { setModalContent, setIsNotificationActive } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trigger, setTrigger] = useState(0); // Variable pour déclencher le refetch

  const refetch = useCallback(() => {
    setTrigger((prev) => prev + 1); // Incrémente pour déclencher l'effet
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
  }, [setModalContent, setIsNotificationActive, trigger]); // Ajout de trigger dans les dépendances

  return { loading, error, refetch }; // Renvoie refetch pour permettre un déclenchement manuel
};

export default useFetchModalContent;
