import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="Pricing" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="huwa-home" content="후와 스튜디오는 브랜드 디자인, 홈페이지 제작, 마케팅 컨설팅을 제공하는 디지털 에이전시입니다." />
        <meta property="og:url" content={EnvVars.URL} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content={EnvVars.DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={EnvVars.OG_IMAGES_URL} />
      </Head>
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
