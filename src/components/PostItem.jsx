import React from 'react';
import styled, { useTheme } from "styled-components";
import css from "@styled-system/css";
import { FiArrowRight } from "react-icons/fi";

import Text from "../components/Text";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    h3 {
      ${css({
        color: "primary"
      })}
    }
    span {
      ${css({
        color: "secondary"
      })}
    }
  }
`;

const Link = styled(Text)`
  svg {
    transition: all 100ms ease-in-out;
  }
  svg:first-child {
    margin-left: 5px;
    ${css({
      color: "white"
    })};
    z-index: 3;
  }
  svg:not(:first-child) {
    opacity: 0;
    margin-left: -5px;
  }
  :hover {
    svg:not(:first-child) {
      opacity: 1;
      margin-left: 0;
    }
    svg:nth-child(2) {
      ${css({
        color: "secondary"
      })};
      z-index: 2;
    }
    svg:nth-child(3) {
      transition-delay: 80ms;
      ${css({
        color: "primary"
      })};
      z-index: 1;
    }
  }
`;

function PostItem({ title, description }) {
  const theme = useTheme();
  return (
    <Article>
      <Text as="h3" variant="subtitle" fontWeight={700}>{title}</Text>
      <Text as="p" variant="paragraph" display="contents" letterSpacing={1}>
        {description}
      </Text>
      <Link as="span" variant="subtitle" fontSize={4} display="inline-flex" alignItems="center" mt={3}>
        See the nucleo{' '}
        <FiArrowRight />
        <FiArrowRight />
        <FiArrowRight />
      </Link>
    </Article>
  );
}

export default PostItem;
