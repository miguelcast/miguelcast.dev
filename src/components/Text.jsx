import * as React from "react";
import styled from "styled-components";
import { variant, typography, color, space, compose } from "styled-system";

const Text = styled('p')(
  compose(
    space,
    typography,
    color,
    variant({
      variants: {
        paragraph: {
          fontFamily: "body",
          fontSize: 1,
          lineHeight: '1.6%'
        },
        title: {
          fontFamily: "heading",
          fontSize: 4
        },
        subtitle: {
          fontFamily: "heading",
          fontSize: 3
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
