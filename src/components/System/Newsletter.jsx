import React from 'react';
import styled from "styled-components";
import css from "@styled-system/css";

import Text from "./Text";
import Button from "./Button";
import Box from "./Box";

const Input = styled.input`
  ${css({
    height: 50,
    fontSize: 4,
    borderColor: 'secondary',
    borderStyle: 'solid',
    borderRadius: 1,
    px: 2
  })}
`;

function Newsletter() {
  function onSubmit() {
    if (typeof window !== "undefined") {
      window.open('https://buttondown.email/miguelcast', 'popupwindow');
    }
  }

  return (
    <Box bg="primary" m={0}>
      <form
        action="https://buttondown.email/api/emails/embed-subscribe/miguelcast"
        method="post"
        target="popupwindow"
        onSubmit={onSubmit}
      >
        <Box
          as="fieldset"
          m="0 auto"
          p={5}
          border={0}
          display="grid"
          gridColumnGap={10}
          gridRowGap={10}
          gridTemplateColumns={["1fr", "1.3fr 1fr auto"]}
          maxWidth="maxContainer"
        >
          <Text as="label" htmlFor="bd-email" variant="alternative" fontSize={5}>
            Want posts updates sent <wbr />straight to your inbox?
          </Text>
          <Input type="email" name="email" id="bd-email" placeholder="Your e-mail" required />
          <input type="hidden" value="1" name="embed"/>
          <Button type="submit" height={50}>Join</Button>
        </Box>
      </form>
    </Box>
  );
}

export default Newsletter;
