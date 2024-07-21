import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import FaqSection from 'views/PricingPage/FaqSection';

export default function PricingPage() {
  return (
    <Page title="자주 묻는 질문" description="자주 묻는 질문입니다.">
      <Head>
        <meta name="description" content={EnvVars.DESC} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content="huwa-website" />
        <meta property="og:image" content={EnvVars.OG_IMAGES_URL} />
      </Head>
      <Wrapper>
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
