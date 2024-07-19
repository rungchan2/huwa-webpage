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
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="huwa-home" content="후와 스튜디오는 브랜드 디자인, 홈페이지 제작, 마케팅 컨설팅을 제공하는 디지털 에이전시입니다." />
        <meta property="og:url" content={EnvVars.URL} />
        <meta property="og:title" content={EnvVars.SITE_NAME} />
        <meta property="og:description" content={EnvVars.DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content={EnvVars.OG_IMAGES_URL} />
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
