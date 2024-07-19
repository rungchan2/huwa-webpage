import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';

// import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page title="Contact" description="후와 스튜디오에 프로젝트를 문의해보세요.">
      <Head>
        <meta name="description" content={EnvVars.DESC} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content="huwa-website" />
        <meta property="og:image" content={EnvVars.OG_IMAGES_URL} />
      </Head>
      <ContactContainer>
        <FormSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
