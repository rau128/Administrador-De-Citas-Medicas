import styled from "styled-components";
import useCitasProvider from "../hooks/useCitasProvider";
const Div = styled.div`
  p {
    font-weight: bold;

    span {
      font-weight: normal;
    }
  }

  button {
    color: white;
    margin-bottom: 1rem;
    padding: 0.5rem;

    @media (min-width: 768px) {
      padding: 1rem;
    }
  }
`;

const Editar = styled.button`
  background-color: #210be2;
`;

const Eliminar = styled.button`
  background-color: red;
`;

const EditarYEliminar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Paciente = ({ cita }) => {
  const { nombre, fecha, sintomas, turno, id } = cita;
  const { setCitas, citas, setCitasObj } = useCitasProvider();

  const eliminarPaciente = () => {
    console.log("Eliminado curso con id.", id);
    const datosActualizados = citas.filter((citaState) => citaState.id !== id);
    setCitas(datosActualizados);
  };

  return (
    <Div>
      <p>
        Paciente: <span>{nombre}</span>
      </p>
      <p>
        Fecha: <span>{fecha}</span>
      </p>
      <p>
        Turno: <span>{turno}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>

      <EditarYEliminar>
        <Editar type="button" onClick={() => setCitasObj(cita)}>
          Editar
        </Editar>
        <Eliminar type="button" onClick={eliminarPaciente}>
          Eliminar
        </Eliminar>
      </EditarYEliminar>
    </Div>
  );
};

export default Paciente;
