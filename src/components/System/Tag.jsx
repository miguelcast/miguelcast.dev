import * as React from "react";
import styled from "styled-components";
import { color, space, border, typography } from "styled-system";

const Tag = styled('a')(
  color,
  space,
  border,
  typography
);

Tag.defaultProps = {
  fontFamily: "body",
  fontSize: 2,
  px: 1,
  py: 1,
  mr: 1,
  color: "tag.text",
  bg: "tag.bg",
  borderRadius: 5
}

export default Tag;
