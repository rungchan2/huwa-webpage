import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function InfoBoxPhone() {
  return (
    <WorkProcessContainer>
      <Title>작업 절차 안내</Title>
      <Subtitle>
        MVP, 홈페이지, 브랜드 개발 복잡한 제작 과정을
        <br />
        후와 스튜디오에서 <HighlightText>원스톱으로 쉽게 진행하세요.</HighlightText>
      </Subtitle>
      <StepsContainer>
        <Step>
          <NumberFontWrapper>
            <StepIcon>💬</StepIcon>
            <StepNumber>1</StepNumber>
            <StepText>문의·견적</StepText>
          </NumberFontWrapper>
        </Step>
        <Step>
          <NumberFontWrapper>
            <StepIcon>💳</StepIcon>
            <StepNumber>2</StepNumber>
            <StepText>계약·결제</StepText>
          </NumberFontWrapper>
        </Step>
        <Step>
          <NumberFontWrapper>
            <StepIcon>📄</StepIcon>
            <StepNumber>3</StepNumber>
            <StepText>기획서 전달</StepText>
          </NumberFontWrapper>
        </Step>
        <Step>
          <NumberFontWrapper>
            <StepIcon>🏆</StepIcon>
            <StepNumber>4</StepNumber>
            <StepText>시안 전달</StepText>
          </NumberFontWrapper>
        </Step>
        <Step>
          <NumberFontWrapper>
            <StepNumber>5</StepNumber>
            <StepText>피드백 반영</StepText>
            <StepIcon>💬</StepIcon>
          </NumberFontWrapper>
        </Step>
        <Step>
          <NumberFontWrapper>
            <StepNumber>6</StepNumber>
            <StepText>최종 검수</StepText>
            <StepIcon>💬</StepIcon>
          </NumberFontWrapper>
        </Step>
      </StepsContainer>
    </WorkProcessContainer>
  );
};

const NumberFontWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: right;
  margin-bottom: -1.5rem;

  ${media('<=tablet')} {
    gap: 0.5rem;
  }
`;

const WorkProcessContainer = styled.div`
  background-color: var(--black);
  color: var(--white);
  padding: 2rem;
  font-family: sans-serif;
  text-align: center;
  margin-top: -1rem;
  

  ${media('>=tablet')} {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const HighlightText = styled.span`
  color: var(--huwaBrand);
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const Step = styled.div`
  position: relative;
  border: 8px solid var(--huwaBrand);
  border-radius: 50%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const StepNumber = styled.span`
  background-color: var(--huwaBrand);
  color: var(--black);
  font-size: 2rem;
  padding: 1rem;
  border-radius: 4px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  line-height: 1;
  padding: 0.3em 1rem;

  ${media('<=phone')} {
    font-size: 1.5rem;
    padding: 0.1em 0.6rem;
    line-height: 1.3;
    width: 2rem;
    font-size: 1.5rem;
  }
`;

const StepIcon = styled.span`
  position: absolute;
  transform: translateY(-85%);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  ${media('<=phone')} {
    font-size: 2rem;
  }
`;

const StepText = styled.span`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media('<=tablet')} {
    font-size: 2rem;
  }
  ${media('<=phone')} {
    font-size: 1.7rem;
  }
`;
