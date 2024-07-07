import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
// import SectionTitle from 'components/SectionTitle';
// import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: '몬스터 협동조합',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: '두잉 협동조합',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: '사회적협동조합 내일',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: '아이애플트리학원',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: '아이애플트리학원',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: '푸른미래 공동체지원센터',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: '행복한 동행발전소',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: '',
    description:
      '교육·서비스업',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: '행복한 동행발전소',
    description:
      '교육·서비스업',
  },
];

export default function Portfolio() {
  return (
    <Page title="포트폴리오" description="후와 스튜디오와 함께한 브랜드 사례를 확인해 보세요.">
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
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
