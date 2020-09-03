import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06);
`;

function Image(props) {
  return (
    <Img loading="lazy" {...props} />
  );
}

export default Image;
