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
  margin: 0 auto;
  ${css({
    maxWidth: "maxContainer"
  })};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  ${css({
    maxWidth: "maxContainer"
  })};
  margin: 2rem auto 0;
`;

const Main = styled.main`
  ${css({
    maxWidth: "maxContainer"
  })};
  margin: 0 auto;
`;

const Footer = styled.footer`
  ${css({
    maxWidth: "maxContainer"
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2020-present Miguel Cast. All Rights Reserved.
        </a>
      </Footer>
    </>
  );
}

export default Layout;
