import NextImage from 'next/image';
import styled from 'styled-components';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function BasicCard({ title, description, imageUrl }: BasicCardProps) {
  return (
    <Card>
      <ImageWrapper>
        <NextImage src={imageUrl} layout="fill" objectFit="fill" alt={title} />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </Card>
  );
}

const Card = styled.div`
font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  max-width: 300px;
  margin: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio */
`;

const TextWrapper = styled.div`
  text-align: left;
  margin-top: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Description = styled.div`
  color: #ccc;
  margin-top: 0.5rem;
`;