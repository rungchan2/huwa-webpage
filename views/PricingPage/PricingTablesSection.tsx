import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible pricing for agile teams</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="MVP 랜딩페이지"
          description="빠르게 MVP를 테스트할 수 있는 서비스"
          benefits={['1 seat', '1 active project', 'Ulimited viewers', '10 blocks']}
        >
          <span>(VAT 포함)</span>55만원~
        </PricingCard>
        <PricingCard
          title="일반형 홈페이지"
          description="기업, 기관, 사업자용 소개 홈페이지"
          benefits={['1 seat', '3 active project', 'Ulimited viewers', '100 blocks', 'CSV Downloader', 'Password protection']}
          
        >
          <span>(VAT 포함)</span>132만원~
        </PricingCard>
        <PricingCard
          title="브랜드 홈페이지"
          description="브랜드 CI 개발 및 통일성을 갖춘 홈페이지 제작"
          benefits={[
            '❚ 페이지',
            '10 active project',
            'Ulimited viewers',
            'Unlimited blocks',
            'CSV Downloader',
            'Password protection',
            'Customization',
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
    margin-top: 8rem;
  }
`;
