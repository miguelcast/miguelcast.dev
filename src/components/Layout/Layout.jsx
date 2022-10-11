import * as React from 'react';
import Link from "next/link";
import styled from "styled-components";
import css from "@styled-system/css";

import Logo from "../System/Logo";
import Text from "../System/Text.jsx";
import Social from "../System/Social";
import Newsletter from "../System/Newsletter";
import Waves from "../Hero/Waves";

const Top = styled.div`
  position: relative;
`;

const Header = styled.header`
  ${css({
    maxWidth: "maxContainer",
    px: [4, null, null, 0]
  })};
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  ${css({
    maxWidth: "maxContainer",
  })};
  margin: 2rem auto 0;
`;

const Main = styled.main`
  ${css({
    maxWidth: "maxContainer",
    px: [4, null, null, 0]
  })};
  position: relative;
  margin: 0 auto 3rem;
  ${(aside) => aside && css({
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gridGap: '0.8rem'
  })};
`;

const Footer = styled.footer`
  ${css({
  bg: "waves",
  mt: 0,
  mb: '25px',
  px: [4, null, null, 0],
  py: 3
})};
  text-align: center;
  box-shadow:
    0 5px 0 #ecc02066,
    0 10px 0 #ec792066,
    0 15px 0 #EA343466,
    0 20px 0 #87202066,
    0 25px 0 #640E0E66;
`;

function Layout({ waves, social, Hero, newsletter, aside, children }) {
  return (
    <>
      {waves && <Waves />}
      <Top>
        <Header>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          {social && (
            <Social social={social} />
          )}
        </Header>
        <Section>
          {Hero}
        </Section>
      </Top>

      <Main aside={+aside}>
        {children}
      </Main>

      {newsletter && <Newsletter />}

      <Footer>
        <Text color="textLight" fontSize={2} variant="alternative">
          © 2020-present Miguel Cast. All Rights Reserved.
        </Text>
      </Footer>
    </>
  );
}

export default Layout;
