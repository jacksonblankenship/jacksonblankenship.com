import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import LogoIcon from '../../../svg/logo.svg';

export const Container = styled(Div100vh)`
  background: linear-gradient(90deg, #2f2f2f 0%, #000000 100%);
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled(LogoIcon)`
  width: 40px;
  height: 40px;
  color: #e7e7e7;

  @media only screen and (min-width: 400px) {
    width: 60px;
    height: 60px;
  }

  @media only screen and (min-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media only screen and (min-width: 1200px) {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.h1`
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

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-left: 40px;
  }
`;

export const SocialIcon = styled.a`
  display: block;

  svg {
    width: 24px;
    height: 24px;
    color: #e7e7e7;

    @media only screen and (min-width: 768px) {
      width: 36px;
      height: 36px;
    }
  }
`;
