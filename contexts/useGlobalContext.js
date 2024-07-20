import { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";

export const useGlobalContext = () => useContext(GlobalContext);
