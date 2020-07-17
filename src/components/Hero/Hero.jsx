import * as React from 'react';
import styled from "styled-components";

import Text from "../System/Text";
import Button from "../System/Button";
import DiscoText from "./DiscoText";

const HeroWrapper = styled.div`
  width: 83.33%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Hero({ title, text, buttonText }) {
  return (
    <HeroWrapper>
      <div>
        <Text variant="heading" fontSize={2}>
          {text}
        </Text>
        <Text variant="title" fontSize={6} lineHeight={1.4}>
          {title}
        </Text>
        <Button type="button">{buttonText}</Button>
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
