import * as React from 'react';
import styled from "styled-components";
import { color, typography, flexbox, layout, compose } from "styled-system";
import { FiGithub, FiTwitter, FiMoon } from "react-icons/fi";

function Social({ social }) {
  return (
    <DivSC
      color="grays.100"
      fontSize={6}
      width={160}
      alignItems="baseline"
      justifyContent="space-around"
    >
      {social?.github && (
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </a>
      )}
      {social?.twitter && (
        <a href={social?.twitter} target="_blank" rel="noopener noreferrer">
          <FiTwitter />
        </a>
      )}
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
