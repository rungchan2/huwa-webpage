import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';

interface InfoBoxProps {
  number: string;
  title: string;
  description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ number, title, description }) => {
  return (
    <CustomContainer>
      <NumberSection>
        <Dot />
        <Number>{number}</Number>
      </NumberSection>
      <LineSection>
        <Line />
        <EndDot />
      </LineSection>
      <TextSection>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextSection>
    </CustomContainer>
  );
};

export default InfoBox;

const CustomContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  flex-wrap: nowrap;
`;

const NumberSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const Dot = styled.div`
  width: 22px;
  height: 22px;
  background-color: var(--huwaBrand);
  border-radius: 50%;
  margin-right: 4rem;
`;

const Number = styled.div`
  font-size: 4rem;
  color: var(--huwaBrand);
  font-weight: bold;
`;

const LineSection = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
  margin: 0 1rem;
`;

const Line = styled.div`
  height: 3px;
  background-color: var(--huwaBrand);
  flex-grow: 1;
`;

const EndDot = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--huwaBrand);
  border-radius: 50%;
  position: absolute;
  right: -11px; // EndDot의 절반 너비만큼 왼쪽으로 이동하여 끝에 위치시킴
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  align-items: flex-start;
  margin-left: 3rem;

  ${media('<=tablet')} {
    width: 300px;
  }

  ${media('<=phone')} {
    width: 200px;
  }
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--text);
  width: fit-content;
`;

const Description = styled.div`
  font-size: 1.5rem;
  color: var(--text);
  margin-top: 0.5rem;
  width: fit-content;
`;
