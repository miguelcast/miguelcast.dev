import React from 'react';
import { FiArrowRight } from "react-icons/fi";

import Text from "../components/Text";

function PostItem({ title, description }) {
  return (
    <article style={{ display: "flex", flexDirection: "column", marginTop: 24 }}>
      <Text as="h3" variant="subtitle">{title}</Text>
      <Text as="p" variant="paragraph" display="contents" lineHeight={1.6}>
        {description}
      </Text>
      <Text as="span" variant="subtitle" fontSize={4} mt={3}>
        See the nucleo <FiArrowRight />
      </Text>
    </article>
  );
}

export default PostItem;
