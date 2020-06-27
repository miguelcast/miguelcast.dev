import * as React from "react";
import styled from "styled-components";
import { variant, typography, color, space, display, compose } from "styled-system";

const Text = styled('p')(
  compose(
    space,
    typography,
    color,
    display,
    variant({
      variants: {
        paragraph: {
          fontFamily: "body",
          fontSize: 3,
          lineHeight: '1.6%'
        },
        title: {
          fontFamily: "heading",
          fontSize: 5
        },
        subtitle: {
          fontFamily: "heading",
          fontSize: 4
        }
      }
    })
  )
);

Text.defaultProps = {
  variant: 'paragraph',
  color: 'grays.100'
}

export default Text;
