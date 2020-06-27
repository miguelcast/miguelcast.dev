import * as React from 'react';
import styled from "styled-components";
import { color, typography, flexbox, layout, compose } from "styled-system";
import { FiGithub, FiTwitter, FiMoon } from "react-icons/fi";

function Social() {
  return (
    <DivSC
      color="grays.100"
      fontSize={6}
      width={160}
      alignItems="baseline"
      justifyContent="space-around"
    >
      <a href="https://github.com/miguelcast" target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href="https://twitter.com/miguel__cast" target="_blank" rel="noopener noreferrer">
        <FiTwitter />
      </a>
      <FiMoon />
    </DivSC>
  );
}

const DivSC = styled.div`
  display: flex;
  ${compose(
    color,
    typography,
    flexbox,
    layout
  )}
`;

export default Social;
