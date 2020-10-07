import * as React from 'react';
import styled from "styled-components";
import css from "@styled-system/css";

import Text from "../System/Text";
import DiscoText from "./DiscoText";

const HeroWrapper = styled.div`
  ${css({
    width: ["100%", null, null, "83.33%"],
    px: [4, null, 0, null]
  })};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Hero({ title, text }) {
  return (
    <HeroWrapper>
      <div>
        <Text variant="heading" fontSize={2}>
          {text}
        </Text>
        <Text variant="title" fontSize={[5, null, 6]} lineHeight={[1.2, null, 1.4]}>
          {title}
        </Text>
      </div>
      <DiscoText>
        <span>CODE</span>
        <span>CODE</span>
        <span>CODE</span>
      </DiscoText>
    </HeroWrapper>
  );
}

export default Hero;
