import * as React from "react";
import styled from "styled-components";
import css from "@styled-system/css";

const LogoStyled = styled.span`
  ${css({
    fontFamily: 'heading',
    fontSize: 4,
    color: 'white'
  })}
  > span {
    ${css({
      color: "primary",
      fontSize: 5
    })}
  }
`;

function Logo({ ...rest }) {
  return (
    <LogoStyled {...rest}>
      Miguel<span>C</span>ast
    </LogoStyled>
  );
}

export default Logo;
