import * as React from "react";
import styled from "styled-components";
import css from "@styled-system/css";

const LogoStyled = styled.span`
  ${css({
    fontFamily: 'heading',
    fontSize: 5,
    color: 'logo.primary'
  })}
  > span {
    ${css({
      color: "logo.secondary",
    })}
  }
`;

function Logo({ ...rest }) {
  return (
    <LogoStyled {...rest}>
      miguel<span>cast</span>.
    </LogoStyled>
  );
}

export default Logo;
