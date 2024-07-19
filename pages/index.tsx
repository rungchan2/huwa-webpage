import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
import Container from 'components/Container';
import InfoBox from 'components/InfoBox';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';
// import Cta from 'views/HomePage/Cta';
// import Features from 'views/HomePage/Features';
// import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import HeroNew from 'views/HomePage/HeroNew';
import Partners from 'views/HomePage/Partners';
// import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
// import Testimonials from 'views/HomePage/Testimonials';
// import { size } from 'lodash';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="huwa-home"
          content="후와 스튜디오는 브랜드 디자인, 홈페이지 제작, 마케팅 컨설팅을 제공하는 디지털 에이전시입니다."
        />
        <meta property="og:url" content={EnvVars.URL} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content={EnvVars.DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content={EnvVars.OG_IMAGES_URL} />
      </Head>
      <HomepageWrapper>
        <DarkerBackgroundContainer>
          <HeroNew />
        </DarkerBackgroundContainer>
        <WhiteBackgroundContainer>
          <Partners />
          <Container>
            <div id="pricetable">
              <PricingTablesSection />
            </div>
          </Container>
          <BasicSection
            imageUrl="/huwa-hero-image.png"
            title="MVP, 홈페이지, 브랜드 원스톱으로 진행하세요."
            title2=""
            overTitle="절차안내"
            reversed
          >
            <p>복잡한 제작과정, 후와 스튜디오만의 체계적 절차로 쉽게 진행하세요.</p>
          </BasicSection>
          <InfoBoxContainer>
            <InfoBox
              number="01"
              title="견적 상담 및 결제"
              description="문의 설문지를 작성해주시면 전문 매니저와 견적 및 기획 상담을 진행한 후, 계약 및 결제를 진행합니다."
            />
            <InfoBox
              number="02"
              title="기획서 전달"
              description="상담 내용을 토대로 홈페이지 기획을 구성해 디자인 컨셉과 함께 기획서를 작성해 전달합니다."
            />
            <InfoBox number="03" title="시안 전달" description="홈페이지 시안을 디자인/퍼블리싱 작업하여 실제 사이트 링크로 전달합니다." />
            <InfoBox
              number="04"
              title="피드백 적용 및 최적화"
              description="전달받은 메인 시안 피드백에 대해 수정 작업과 함께, PC, 모바일 기기별 최적화 작업을 수행합니다."
            />
            <InfoBox
              number="05"
              title="최종 검수 및 런칭"
              description="최종검수를 진행하여 오류사항을 확인합니다. 이후 홈페이지 관리 방안과 유지 보수 관련 가이드를 전달합니다."
            />
          </InfoBoxContainer>
        </WhiteBackgroundContainer>
        {/* <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer> */}
      </HomepageWrapper>
    </>
  );
}



const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  ${media('<=tablet')} {
    display: none;
  }
`;
const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 5rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: var(--black);
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  & > :last-child {
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
