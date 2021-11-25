import type { NextPage } from 'next';
import Head from 'next/head';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import GitHub from '../svg/github.svg';
import LinkedIn from '../svg/linkedin.svg';
import Logo from '../svg/logo.svg';
import Twitter from '../svg/twitter.svg';

const Container = styled(Div100vh)`
  background: linear-gradient(90deg, #2f2f2f 0%, #000000 100%);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  margin: 20px 0;
  color: #e7e7e7;
  font-weight: 600;
  font-size: 18px;
  font-family: Montserrat, sans-serif;
  text-align: center;

  @media only screen and (min-width: 400px) {
    font-size: 24px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 36px;
  }

  @media only screen and (min-width: 1200px) {
    margin: 40px 0;
    font-size: 48px;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-left: 40px;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>coming soon...</title>
        <meta
          name="description"
          content="Jackson Blankenship's personal website"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Main>
        <Logo />
        <Title>
          personal projects take time.
          <br />
          we’ll be live soon.
        </Title>
        <Social>
          <a
            href="https://twitter.com/env_jackson"
            target="_blank"
            rel="noreferrer noopener">
            <Twitter />
          </a>
          <a
            href="https://github.com/jacksonblankenship"
            target="_blank"
            rel="noreferrer noopener">
            <GitHub />
          </a>
          <a
            href="https://linkedin.com/in/jacksonblankenship"
            target="_blank"
            rel="noreferrer noopener">
            <LinkedIn />
          </a>
        </Social>
      </Main>
    </Container>
  );
};

export default Home;
