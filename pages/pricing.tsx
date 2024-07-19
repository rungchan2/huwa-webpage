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
        <meta name="description" content={EnvVars.DESC} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content="huwa-website" />
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
