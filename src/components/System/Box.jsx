import * as React from 'react';
import styled from 'styled-components';
import { color, border, space, grid, layout, flexbox, position, shadow, compose } from "styled-system";

const Box = styled('div')(
  compose(
    position,
    space,
    shadow,
    border,
    layout,
    flexbox,
    grid,
    color
  )
);

export default Box;
