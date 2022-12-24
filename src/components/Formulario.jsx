import styled from "styled-components";
import { reinicarFormulario } from "../helpers/helper";
import useCitasProvider from "../hooks/useCitasProvider";
import MensajeDeError from "./MensajeDeError";
const Form = styled.form`
  overflow-y: hidden;
  height: 34rem;
  background-color: white;
  padding: 1rem;

  @media (min-width: 768px) {
    height: 38rem;
  }

  @media (min-width: 1200px) {
    height: 34rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  input {
    width: 100%;
  }

  input[type="submit"] {
    background-color: #210be2;
    color: white;

    :hover {
      background-color: #120779;
    }
  }

  textarea {
    width: 100%;
  }
`;

const H2 = styled.h2`
  text-align: center;
  margin-top: 1.3rem;

  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;
const Formulario = () => {
  const { citas, setCitas, citasObj, setCitasObj, setMensaje, mensaje } =
    useCitasProvider();
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar el formulario
    if (Object.values(citasObj).includes("")) {
      setMensaje("Todos Los Campos Son Obligatorios");

      return;
    }
    //reiniciar el mensaje de errror luego de validar el formulario
    setMensaje("");

    if (citasObj.id) {
      console.log("editando");
      const datosEditados = citas.map((citaState) =>
        citaState.id === citasObj.id ? citasObj : citaState
      );

      setCitas(datosEditados);
      console.log(datosEditados);
    } else {
      //agregar un id a las citas
      citasObj.id = Date.now();
      //pasar los datos al arreglo principal de las citas
      setCitas([...citas, citasObj]);
      console.log("agregando");
    }

    //reiniciar el objeto de la citas.
    setCitasObj({});
    //reiniciar los imputs del formulario
    reinicarFormulario();
  };

  return (
    <>
      {mensaje && (
        <MensajeDeError>
          <p>{mensaje}</p>
        </MensajeDeError>
      )}
      <Form onSubmit={handleSubmit}>
        <H2>
          Agregar Un <span>Paciente</span>
        </H2>
        <div>
          <label htmlFor="nombre">Nombre Paciente</label>
          <input
            value={citasObj?.nombre}
            className="botones"
            type="text"
            placeholder="Nombre Del Paciente"
            name="nombre"
            onChange={(e) =>
              setCitasObj({ ...citasObj, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="fecha">Fecha De Registro</label>
          <input
            value={citasObj?.fecha}
            className="botones"
            type="date"
            name="fecha"
            onChange={(e) =>
              setCitasObj({ ...citasObj, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="turno">Turno</label>
          <input
            value={citasObj?.turno}
            className="botones"
            type="number"
            name="turno"
            placeholder="Turno Para La Cita"
            onChange={(e) =>
              setCitasObj({ ...citasObj, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="sintomas">Sintomas</label>
          <textarea
            value={citasObj?.sintomas}
            className="botones"
            name="sintomas"
            cols="30"
            rows="3"
            placeholder="Sintomas Del Paciente"
            onChange={(e) =>
              setCitasObj({ ...citasObj, [e.target.name]: e.target.value })
            }
          ></textarea>
        </div>

        <input
          type="submit"
          value={citasObj.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
      </Form>
    </>
  );
};

export default Formulario;
