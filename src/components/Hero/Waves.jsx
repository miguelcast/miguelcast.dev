import * as React from "react";
import styled, { useTheme } from "styled-components";
import css from "@styled-system/css";

function Waves() {
  const theme = useTheme();

  return (
    <ContainerSC>
      <div />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={theme.colors.waves}
          fillOpacity="1"
          d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,122.7C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </ContainerSC>
  );
}

const ContainerSC = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 400px;
  pointer-events: none;
  overflow: hidden;
  div {
    position: absolute;
    width: 100%;
    height: 100px;
    ${css({
      bg: "waves"
    })}
  }
  svg {
    min-width: 1400px;
    position: absolute;
    top: 99px;
  }
`;

export default Waves
