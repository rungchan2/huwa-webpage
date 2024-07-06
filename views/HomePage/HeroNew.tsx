import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Container from 'components/Container';

export default function HeroNew() {
  return (
    <ContainerDark>
    <StudioWrapper>
      <Circle size="large" />
      <Circle size="small" />
      <LogoCenter/>
      <Heading>HUWA STUDIO</Heading>
      <Description>
        후와 스튜디오는 모든 브랜드가 호랑이가 포효하듯
        울림을 주는 브랜드로 나아갈 수 있다고 믿습니다.
      </Description>
    </StudioWrapper>
    </ContainerDark>
  );
}
const ContainerDark = styled(Container)`
  background-color: #000;
  color: white;
`;

const StudioWrapper = styled.div`
background-color: #000;
  position: relative;
  height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
`;

type CircleProps = {
  size: 'large' | 'small';
};

const Circle = styled.div<CircleProps>`
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  ${({ size }) => size === 'large' && `
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
  `}
  ${({ size }) => size === 'small' && `
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    aspect-ratio: 1/1;
  `}
`;

const LogoCenter = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
`;

const Heading = styled.h1`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 33.3%;
  transform: translateY(-50%);
  font-size: 2em;
  margin: 0;
`;

const Description = styled.p`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -60px;
  font-size: 0.9em;
  margin: 5px 0;
  white-space: pre-line;
`;