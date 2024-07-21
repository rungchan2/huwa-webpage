import NextImage from 'next/image';
import NextLink from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import { media } from 'utils/media';




export interface ArticleCardProps {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
  source?: string;
  type?: string;
}

export default function ArticleCard({ title, slug, imageUrl, description, source, type}: ArticleCardProps) {
  return (
    <NextLink href={'/blog/' + slug} passHref>
      <ArticleCardWrapper className="article-card-wrapper">
        <HoverEffectContainer>
          <ImageContainer>
            <NextImage src={imageUrl} layout="fill" objectFit="cover" alt={title} />
            <NewSocialIcon url={source} bgColor="transparent" style={{ width: '40px', height: '40px' }} />
          </ImageContainer>
          <Content>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <SeeMore>자세히 보기 <GoArrowRight/></SeeMore>
          </Content>
        </HoverEffectContainer>
      </ArticleCardWrapper>
    </NextLink>
  );
}

const SeeMore = styled.p`
font-size: 1.6rem;
color: var(--iconLightColor);
display: flex;
align-items: center;
gap: 0.5rem;

& > svg {
color: inherit;
}
`;


const NewSocialIcon = styled(SocialIcon)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
`;


const ArticleCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  margin: auto;
  text-decoration: none;
  border-radius: 0.6rem;
  background: rgb(var(--cardBackground));
  cursor: pointer;
  color: rgb(var(--text));
`;

const HoverEffectContainer = styled.div`
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    border-radius: 0.6rem;
    overflow: hidden;
    transform: scale(1.025);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  align-items: center;
  width: 100%;
  padding-top: 90%; /* 1:1 Aspect Ratio */
  
  ${media('<=desktop')} {
    width: 100%;
  }
`;

const Content = styled.div`
  padding: 2rem 0rem;

  & > * {
    margin-top: 1rem;
  }
`;

const Title = styled.h4`
  font-size: 2.4rem;
  color: var(--black);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Description = styled.p`
  font-size: 1.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  opacity: 0.6;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;