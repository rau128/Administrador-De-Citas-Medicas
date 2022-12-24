import { createContext, useEffect, useState } from "react";

export const citasContext = createContext();

const ContextCitasProvider = ({ children }) => {
  const INITIAL = JSON.parse(localStorage.getItem("citas")) ?? [];
  const [citas, setCitas] = useState(INITIAL);
  const [mensaje, setMensaje] = useState("");
  const [citasObj, setCitasObj] = useState({
    nombre: "",
    fecha: "",
    turno: "",
    sintomas: "",
    id: 0,
  });

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);

  return (
    <citasContext.Provider
      value={{ citas, setCitas, citasObj, setCitasObj, mensaje, setMensaje }}
    >
      {children}
    </citasContext.Provider>
  );
};

export default ContextCitasProvider;
