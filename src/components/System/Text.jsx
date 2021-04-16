import * as React from "react";
import styled from "styled-components";
import { variant, typography, color, space, display, flexbox, system } from "styled-system";

const Text = styled('p')(
  space,
  typography,
  color,
  display,
  flexbox,
  variant({
    variants: {
      paragraph: {
        fontFamily: "body",
        fontSize: 3,
        lineHeight: '1.6',
      },
      title: {
        fontFamily: "heading",
      },
      subtitle: {
        fontFamily: "heading",
        fontSize: 4
      },
      heading: {
        fontFamily: "heading"
      },
      alternative: {
        fontFamily: "alternative"
      }
    }
  }),
  system({
    fontVariantNumeric: true
  })
);

Text.defaultProps = {
  variant: 'paragraph',
  color: 'text'
}

export default Text;
