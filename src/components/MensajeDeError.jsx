import styled from "styled-components";

const DivMensaje = styled.div`
  text-align: center;
  top: 2rem;
  font-size: 1.3rem;
  padding: 2rem;
  @media (min-width: 768px) {
    width: 30%;
    top: 4.5rem;
    font-size: 1.5rem;
    padding: 0rem;
  }
  overflow: hidden;
  color: red;
  position: absolute;
`;

const MensajeDeError = ({ children }) => {
  return <DivMensaje>{children}</DivMensaje>;
};

export default MensajeDeError;
