import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Container, Logo, Main, Social, SocialIcon, Title } from './styles';

const ComingSoon: NextPage = () => (
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
        <SocialIcon
          href="https://twitter.com/env_jackson"
          target="_blank"
          rel="noreferrer noopener">
          <BsTwitter />
        </SocialIcon>
        <SocialIcon
          href="https://github.com/jacksonblankenship"
          target="_blank"
          rel="noreferrer noopener">
          <BsGithub />
        </SocialIcon>
        <SocialIcon
          href="https://linkedin.com/in/jacksonblankenship"
          target="_blank"
          rel="noreferrer noopener">
          <BsLinkedin />
        </SocialIcon>
      </Social>
    </Main>
  </Container>
);

export default ComingSoon;
