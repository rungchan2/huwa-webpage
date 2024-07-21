import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Collapse from './Collapse';
import RichText from './RichText';

interface AccordionProps {
  title: string;
  isOpen?: boolean;
}

export default function Accordion({ title, isOpen, children }: PropsWithChildren<AccordionProps>) {
  const [hasCollapsed, setHasCollapsed] = useState(!isOpen);
  const isActive = !hasCollapsed;
  return (
    <AccordionWrapper onClick={() => setHasCollapsed((prev) => !prev)}>
      <TitleWrapper>
        <Title>{title}</Title>
        <Icon isActive={isActive}>
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
            <path d="M9.5 16L0.406733 0.25L18.5933 0.249998L9.5 16Z" fill="#FFD166" />
          </svg>
        </Icon>
      </TitleWrapper>
      <Collapse isOpen={isActive} duration={300}>
        <Description>
          <RichText>{children}</RichText>
        </Description>
      </Collapse>
    </AccordionWrapper>
  );
}

const Title = styled.h3`
  font-size: 2rem;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div<{ isActive: boolean }>`
  width: 2.4rem;
  transition: transform 0.3s;
  transform: rotateZ(${(p) => (p.isActive ? 180 : 0)}deg);
`;

const Description = styled.div`
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: normal;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem 2rem 0;
  background: rgb(var(--cardBackground));
  box-shadow: var(--shadow-md);
  cursor: pointer;
  border-radius: 0.6rem;
  transition: opacity 0.2s;

  ${media('<=desktop')} {
    width: 100%;
  }
`;
