import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';
import Image, { ImageProps } from 'next/image';
import mailimage from '../public/mailimage.png';
import Button from 'components/Button';

interface CustomImageProps extends ImageProps {
  style?: React.CSSProperties;
}

export default function NotFoundPage() {
  return (
    <Wrapper>
      <NewContainer>
        <TextConainer>
          <Title>404 ERROR</Title>
          <Description>
            죄송합니다. 페이지를 찾을 수 없습니다.
            <br />
            존재하지 않는 주소를 입력했거나 <br />
            요청하신 페이지의 주소가 변경, 삭제돼 찾을 수 없습니다.
          </Description>
          <NewButton href='/' brand>처음으로</NewButton>
        </TextConainer>
        <ImageContainer>
          <NewImage src={mailimage} alt="페이지 없음 이미지" width={400} height={450} style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
        </ImageContainer>
      </NewContainer>
    </Wrapper>
  );
}

const NewButton = styled(Button)`
  margin-top: 2rem;
  width: 30%;
  border-radius: 30px;
  font-size: 1.8rem;

  ${media('<=tablet')} {
    width: 100%;
  }
`;

const NewContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${media('<=tablet')} {
    flex-direction: column-reverse;
    justify-content: center;

  }
`;


const TextConainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  text-align: left;
`;

const NewImage = styled(Image)<CustomImageProps>``;

const Wrapper = styled.div`
  background: rgb(var(--background));
  margin: 10rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-top: 5rem;
`;

const Description = styled.div`
  font-size: 2rem;
  opacity: 0.8;
  margin-top: 2.5rem;
`;

const ImageContainer = styled.div`
  width: 50%;

  ${media('<=tablet')} {
    width: 100%;
    justify-content: center;
  }
`;
