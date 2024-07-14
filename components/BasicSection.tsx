import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  imageUrl: string;
  title: string;
  title2: string;
  overTitle: string;
  reversed?: boolean;
  mergeTitle?: boolean;
}

export default function BasicSection({
  imageUrl,
  title,
  title2,
  overTitle,
  reversed,
  children,
  mergeTitle,
}: PropsWithChildren<BasicSectionProps>) {

  if (mergeTitle === true) {
    title = `${title} ${title2}`;
    title2 = '';
  } else {
    title = `${title}`
    title2 = `${title2}`
  }

  return (
    <BasicSectionWrapper reversed={reversed}>
      {imageUrl ? (
        <ImageContainer>
          <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </ImageContainer>
      ) : null}
      <ContentContainer>
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <br />
        {title2 ? <Title2>{title2}</Title2> : null}
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Title2 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 4rem;
  font-size: 2.25rem;
  color: var(--huwaBrand);

  &::before {
    display: none;
  }
  
  ${media('<=tablet')} {
  margin-bottom: 2rem;
  }
`;
export { CustomOverTitle };

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;

  ${media('<=tablet')} {
    
  }
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
// BasicSectionWrapper 컴포넌트를 정의합니다.
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
