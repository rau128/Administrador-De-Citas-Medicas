import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import styled from "styled-components";

const Main = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  margin-bottom: 2rem;
`;

const Div = styled.div``;

function App() {
  return (
    <Div className="container">
      <Header />

      <Main>
        <Formulario />
        <ListadoPacientes />
      </Main>
    </Div>
  );
}

export default App;
