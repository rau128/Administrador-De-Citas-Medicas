import styled from "styled-components";
import useCitasProvider from "../hooks/useCitasProvider";
import Paciente from "./Paciente";

const Section = styled.section`
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 34rem;

  @media (min-width: 768px) {
    width: 80%;
    height: 38rem;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    height: 34rem;
  }
  background-color: white;
  h2 {
    text-align: center;
    margin-top: 1.5rem;

    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const ListadoPacientes = () => {
  const { citas } = useCitasProvider();
  return (
    <Section>
      <h2>
        {citas.length > 0 ? "Listado De Pacientes" : "Aun No Hay Pacientes"}
      </h2>

      {citas.map((cita) => {
        return <Paciente key={cita.nombre} cita={cita} />;
      })}
    </Section>
  );
};

export default ListadoPacientes;
