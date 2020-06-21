import * as React from "react";
import styled from "styled-components";
import { typography, color, compose } from "styled-system";

const LogoStyled = styled.span`
  ${compose(
    typography,
    color
  )}
  > span {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes[4]}px;
  }
`;

function Logo({ ...rest }) {
  return (
    <LogoStyled {...rest}>
      Miguel<span>C</span>ast
    </LogoStyled>
  );
}

Logo.defaultProps = {
  fontFamily: 'heading',
  fontSize: 3,
  color: 'white'
};

export default Logo;
