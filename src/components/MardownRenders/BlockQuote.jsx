import React from 'react';
import styled from 'styled-components';
import css from "@styled-system/css";

const BlockQuoteStyled = styled.blockquote`
  box-sizing: border-box;
  margin: 1rem 0;
  padding: 12px 16px;
  border-left-style: solid;
  ${css({
    borderRadius: 1,
    borderLeftWidth: 4,
    borderLeftColor: "primary",
    bg: "blockquotes.bg"
  })}
`;

function BlockQuote({ children }) {
  return (
    <BlockQuoteStyled>
      {children}
    </BlockQuoteStyled>
  );
}

export default BlockQuote;
