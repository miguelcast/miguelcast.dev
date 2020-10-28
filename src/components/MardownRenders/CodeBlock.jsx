import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Tag from "../System/Tag";

function CodeBlock({ language, value }) {
  return (
    <>
      <Tag>{language.toUpperCase()}</Tag>
      <SyntaxHighlighter language={language} style={atomDark}>
        {value}
      </SyntaxHighlighter>
    </>
  );
}

export default CodeBlock;
