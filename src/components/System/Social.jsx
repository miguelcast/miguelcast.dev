import * as React from 'react';
import styled from "styled-components";
import { color, typography, flexbox, layout, compose } from "styled-system";
import { FiGithub, FiTwitter, FiMoon, FiSun } from "react-icons/fi";

import Button from "./Button";
import useThemeToggle from "../../hooks/useThemeToggle";

function Social({ social }) {
  const { theme, onToggleTheme } = useThemeToggle();
  return (
    <DivSC
      color="text"
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
      <Button type="button" variant="link" px={0} py={0} fontSize={6} onClick={onToggleTheme}>
        {theme === 'dark' ? <FiMoon /> : <FiSun /> }
      </Button>
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
  & > a > svg {
    ${color}
  }
`;

export default Social;
