import React from 'react';
import styled from "styled-components";
import css from "@styled-system/css";
import { FiArrowRight } from "react-icons/fi";

import Text from "../System/Text";
import Tag from "../System/Tag";

const Section = styled.section`
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
  .tags {
    ${css({
      my: -3,
      mb: 3
    })};
  }
`;

const Link = styled(Text)`
  svg {
    transition: all 100ms ease-in-out;
  }
  svg:first-child {
    margin-left: 5px;
    ${css({
      color: "text"
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

function PostItem({ title, description, tags }) {
  return (
    <Section>
      <Text as="h3" variant="subtitle" fontWeight={700}>{title}</Text>
      <div className="tags">
        {tags?.map(tag => <Tag key={tag.id} as="span">{tag.name}</Tag>)}
      </div>
      <Text as="p" variant="paragraph" display="contents" letterSpacing={0.8}>
        {description}
      </Text>
      <Link as="span" variant="subtitle" fontSize={4} display="inline-flex" alignItems="center" mt={3}>
        See the nucleo{' '}
        <FiArrowRight />
        <FiArrowRight />
        <FiArrowRight />
      </Link>
    </Section>
  );
}

export default PostItem;
