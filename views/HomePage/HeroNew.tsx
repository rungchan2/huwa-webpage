import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import Logo from 'components/Logo';

export default function HeroNew() {
  return (
    <ContainerDark>
      <StudioWrapper>
        <Circle size="large" />
        <Circle size="small" />
        <LogoCenter />
        <Heading>HUWA STUDIO</Heading>
        <Description>
          후와 스튜디오는 모든 브랜드가 호랑이가 포효하듯
          <br />
          울림을 주는 브랜드로 나아갈 수 있다고 믿습니다.
        </Description>
      </StudioWrapper>
    </ContainerDark>
  );
}

const ContainerDark = styled(Container)`
  height: 100vh;
  background-color: var(--black);
  color: white;
  padding: 5rem 0;
`;

const StudioWrapper = styled.div`
  background-color: #000;
  position: relative;
  height: 100%;
  color: white;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;

type CircleProps = {
  size: 'large' | 'small';
};

const Circle = styled.div<CircleProps>`
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  ${({ size }) =>
    size === 'large' &&
    `
    height: 100%;
    aspect-ratio: 1/1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `}
  ${({ size }) =>
    size === 'small' &&
    `
    aspect-ratio: 1/1;
    height: 60%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

const LogoCenter = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
`;

const Heading = styled.h1`
  display: inline-block;
  position: absolute;
  background-color: rgba(0, 0, 0, 1);
  text-align: center;
  top: 20%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 8rem;
  margin: 0;
  padding: 1rem;
`;

const Description = styled.p`
  display: inline-block;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  line-height: 2;
  text-align: center;
  bottom: 23%;
  transform: translate(-50%, 50%);
  left: 50%;
  font-size: 2.25rem;
  margin: 0;
  white-space: pre-line;
  padding: 1rem;
`;
