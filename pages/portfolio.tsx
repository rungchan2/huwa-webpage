import Head from 'next/head';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { EnvVars } from 'env';
// import SectionTitle from 'components/SectionTitle';
// import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/moster.png',
    title: '몬스터 협동조합',
    description: '교육·서비스업',
    href: 'https://monstercoop-49888.bubbleapps.io/version-test',
  },
  {
    imageUrl: '/grid-icons/doing.png',
    title: '두잉 협동조합',
    description: '교육·서비스업',
    href: 'https://doingroad.com',
  },
  {
    imageUrl: '/grid-icons/tomorrow.png',
    title: '사회적협동조합 내일',
    description: '교육·서비스업',
    href: 'https://testweb1010.imweb.me/',
  },
  {
    imageUrl: '/grid-icons/iapple.png',
    title: '아이애플트리학원',
    description: '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/bluefuture.png',
    title: '푸른미래 공동체지원센터',
    description: '기관',
  },
  {
    imageUrl: '/grid-icons/happy.png',
    title: '행복한 동행발전소',
    description: '복지·서비스업',
  },
];

export default function Portfolio() {
  return (
    <Page title="포트폴리오" description="후와 스튜디오와 함께한 브랜드 사례를 확인해 보세요.">
      <Head>
        <meta name="description" content={EnvVars.DESC} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content="huwa-website" />
        <meta property="og:image" content={EnvVars.OG_IMAGES_URL} />
      </Head>
      <Wrapper>
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;
  gap-y: 5rem;

  ${media('<=desktop')} {
    --autofit-grid-item-size: 30rem;
    
  }

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
    display: flex;
    flex-direction: column;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
