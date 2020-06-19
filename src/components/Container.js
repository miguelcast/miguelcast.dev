import * as React from "react";
import styled from "styled-components";

const ContainerMain = styled.div`
  max-width: 1100px;
`;

function Container({ children }) {
  return (
    <ContainerMain>
      {children}
    </ContainerMain>
  );
}

export default Container;
