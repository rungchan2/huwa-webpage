import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicSection from 'components/BasicSection';
import PricingCard from 'components/PricingCard';
import { media } from 'utils/media';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <NewBasicSection imageUrl='' title='MVP, 홈페이지, 브랜드 원스톱으로 해결하세요.' title2='' overTitle='비용 안내' mergeTitle={false} >
        <p>투명한 가격 정찰제로 예산에 맞는 플랜을 선택하세요.</p>
      </NewBasicSection>

      <AutofitGrid>
        <PricingCard
          title="MVP 랜딩페이지"
          description="빠르게 MVP를 테스트할 수 있는 서비스"
          benefits={[
            '페이지',
            '메인 1페이지 (반응형)',
            '섹션 4개',
            '섹션 추가',
            '8만원 ~',
            '서비스',
            '[디자이너와 협업]',
            '도메인 연결',
            '사이트 등록 (네이버/구글)',
            '제작기간 : 영업일 5일',
          ]}
        >
          <span>(VAT 포함)</span>55만원~
        </PricingCard>
        <PricingCard
          title="일반형 홈페이지"
          description="기업, 기관, 사업자용 소개 홈페이지"
          benefits={[
            '페이지',
            '메인 1페이지 (반응형)',
            '서브 5페이지 (반응형)',
            '섹션 추가',
            '10만원 ~',
            '서비스',
            '[디자이너와 협업]',
            '모바일 최적화',
            '도메인 연결',
            '사이트 등록 (네이버/구글)',
            '제작기간',
            '영업일 14일',
          ]}
        >
          <span>(VAT 포함)</span>132만원~
        </PricingCard>
        <PricingCard
          title="브랜드 홈페이지"
          description="브랜드 CI 개발 및 통일성을 갖춘 홈페이지 제작"
          benefits={[
            '페이지',
            '메인 1페이지 (반응형)',
            '서브 10페이지 (반응형)',
            '섹션 추가',
            '30만원 ~',
            '서비스',
            '브랜드 CI 개발',
            '모바일 최적화',
            '도메인 연결',
            '사이트 등록 (네이버/구글)',
            '제작기간',
            '영업일 4주 - 협의',
          ]}
        >
          <span>(VAT 포함)</span>550만원~
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 4rem;
  }
`;

const NewBasicSection = styled(BasicSection)`
  ${media('<=tablet')} {
    
  }
`;