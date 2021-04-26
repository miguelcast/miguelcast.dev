import * as React from "react";
import styled from "styled-components";
import { variant, space, typography, border, layout, compose } from "styled-system";

const Button = styled('button')(
  compose(
    border,
    space,
    typography,
    layout,
    variant({
      variants: {
        primary: {
          color: "primary",
          bg: "white",
          '&:hover': {
            bg: 'secondary'
          }
        },
        link: {
          color: "text",
          bg: "transparent",
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
