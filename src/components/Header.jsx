import styled from "styled-components";

const HeaderCss = styled.header`
  text-align: center;

  h1 {
    color: #210be2;
    font-family: "Oswald", sans-serif;
    font-size: 1.8rem;
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
`;

const Header = () => {
  return (
    <HeaderCss>
      <h1>Administrador De Citas Medicas</h1>
    </HeaderCss>
  );
};

export default Header;
