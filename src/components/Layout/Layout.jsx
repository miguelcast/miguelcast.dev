import * as React from 'react';
import Link from "next/link";
import styled from "styled-components";
import css from "@styled-system/css";

import Logo from "../System/Logo";
import Social from "../System/Social";
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
  margin: 0 auto;
`;

const Footer = styled.footer`
  ${css({
    maxWidth: "maxContainer",
    px: [4, null, null, 0]
  })};
  margin: 2rem auto 2rem;
  text-align: center;
`;

function Layout({ waves, social, Hero, children }) {
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

      <Main>
        {children}
      </Main>

      <Footer>
        © 2020-present Miguel Cast. All Rights Reserved.
      </Footer>
    </>
  );
}

export default Layout;
