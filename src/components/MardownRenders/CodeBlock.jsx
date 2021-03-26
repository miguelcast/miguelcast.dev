import React from 'react';
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Tag from "../System/Tag";

function CodeBlock({ className, children }) {
  const language = className.replace("language-", "");
  let content = children;
  if (children[children.length - 1] === "\n") {
    content = children.slice(0, -1);
  }

  return (
    <>
      <Tag>{language.toUpperCase()}</Tag>
      <SyntaxHighlighter language={language} style={atomDark}>
        {content}
      </SyntaxHighlighter>
    </>
  );
}

export default CodeBlock;
