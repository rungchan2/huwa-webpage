import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import { media } from 'utils/media';

const PARTNER_LOGOS = ['moster-logo.png', 'doing-logo.png', 'tomorrow-logo.png', 'iapple-logo.png', 'happy-logo.png', 'blue-logo.png'];

export default function Partners() {
  return (
    <PartnersWrapper>
      <Title>
        이미 수많은 기업이
        <br />
        후와 스튜디오를 선택했습니다.
      </Title>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((logo) => (
          <SwiperSlide key={logo}>
            <NextImage src={'/partners/' + logo} alt={normalizePartnerLogoName(logo)} width={160} height={120} layout="fixed" />
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}

function normalizePartnerLogoName(logo: string) {
  return logo.replace('.png', '');
}

const Title = styled.h3`
  font-size: 4rem;
  letter-spacing: 0.02em;
  margin-bottom: 155px;
  text-align: left;
  opacity: 0.8;
  line-height: 1.5;

  ${media('<=desktop')} {
    line-height: 1.5;
    margin-bottom: 60px;
    font-size: 2.5rem;

  }
`;

const PartnersWrapper = styled(Container)`
  padding-top: 15rem;
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
