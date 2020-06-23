import * as React from "react";
import styled from "styled-components";
import { variant, space, typography, border, compose } from "styled-system";

const Button = styled('button')(
  compose(
    border,
    space,
    typography,
    variant({
      variants: {
        primary: {
          color: "secondary",
          bg: "primary",
        }
      }
    })
  ),
);

Button.defaultProps = {
  variant: "primary",
  fontFamily: "heading",
  fontSize: 4,
  px: 5,
  py: 4,
  borderRadius: 1,
  borderStyle: 'none'
}

export default Button;
