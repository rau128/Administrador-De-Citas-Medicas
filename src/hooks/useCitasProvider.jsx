import { useContext } from "react";
import { citasContext } from "../context/ContextCitas";

const useCitasProvider = () => {
  return useContext(citasContext);
};

export default useCitasProvider;
