"use client";

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import segment from 'utils/segments';
import InfoBoxPhone from './InfoBoxPhone';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  const router = useRouter();
  const [segments, setSegments] = useState<string[]>([]);

  useEffect(() => {
    const handleRouteChange = () => {
      setSegments(segment(router.pathname));
    };

    handleRouteChange();

  }, [WaveCta]);

  // console.log(" 현재 경로 dddd ", segments);
  // console.log(" 현재 경로 길이 ", segments.length);



  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    {media('<=tablet') && segments.length !== 0 ? null : <InfoBoxPhone/>}
      <CtaWrapper>
        <Container>
          <Title>후와 스튜디오와 함께 성장하세요.</Title>
          <CustomButtonGroup>
            {/* <Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button> */}
            <NextLink href="/features" passHref>
              <OutlinedButton brand>
              제작 상담하기
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}


const CtaWrapper = styled.div`
  background: rgb(var(--blackRgb));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  font-size: 1.6rem;
  color: rgb(var(--secondary));
  padding: 1.5rem 4.5rem;
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
