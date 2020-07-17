import * as React from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import useMousePosition from "../../hooks/useMousePosition";

const positions = [5, 10, 15, 20, 25, 30, 35];
const initialPositions = Array(7).fill(0);
function getTextShadow(pos) {
  return `
      ${pos[6]}px 0px 0 #ffffff,
      ${pos[5]}px 5px 0 #e2da23,
      ${pos[4]}px 10px 0 #ec7920,
      ${pos[3]}px 15px 0 #EA3434,
      ${pos[2]}px 20px 0 #872020,
      ${pos[1]}px 25px 0 #640E0E,
      ${pos[0]}px 30px 0 #480909
  `;
}

function DiscoText({ children }) {
  const [loadClass, setLoadClass] = React.useState(null);

  const pElement = React.useRef(null);
  const position = useMousePosition(pElement);

  React.useEffect(() => {
    setLoadClass('load');
  }, []);

  React.useEffect(() => {
    if (loadClass) {
      const newPositions = positions.map(pos => {
        return position.x / (pElement?.current?.offsetWidth || position.x) * (pos - -pos) + -pos;
      });
      pElement.current.style.textShadow = getTextShadow(newPositions);
    }
  }, [position.x]);

  return (
    <Paragraph className={loadClass} ref={pElement}>
      {children}
    </Paragraph>
  );
}

const Paragraph = styled.p`
  display: inline-flex;
  flex-direction: column;
  font-size: 140px;
  line-height: 120px;
  padding: 0;
  margin: 0;

  ${css({
  fontFamily: 'alternative',
  color: "transparent",
  fontWeight: "bold"
})}
  
  &.load {
    text-shadow: ${getTextShadow(initialPositions)};  
  }
`;

export default DiscoText;
