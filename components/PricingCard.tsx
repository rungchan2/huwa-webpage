import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Button from './Button';
import RichText from './RichText';

interface PricingCardProps {
  title: string;
  description: string;
  benefits: string[];
  isOutlined?: boolean;
}

export default function PricingCard({ title, description, benefits, isOutlined, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;

  return (
    <Wrapper isOutlined={isOutlined}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PriceContainer>
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                <li
                  key={idx}
                  className={
                    singleBenefit.startsWith('페이지') ||
                    singleBenefit.startsWith('섹션 추가') ||
                    singleBenefit.startsWith('서비스') ||
                    singleBenefit.startsWith('제작기간')
                      ? 'highlight'
                      : ''
                  }
                >
                  {singleBenefit}
                </li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>
      <Price>{children}</Price>
      <ButtonContainer>
      <CustomButton brand>견적서 요청</CustomButton>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3.5rem;
  border-radius: 2rem;
  border: 1px solid #d9d9d9;
  background: rgb(var(--cardBackground));
  box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.isOutlined ? 'scale(1.1)' : 'scale(1.0)')};
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
  text-align: left;
`;

const Description = styled.p`
  font-size: 1.8rem;
  text-align: left;
`;

const PriceContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;
  gap: 2rem;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const CustomRichText = styled(RichText)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: top;
  li {
    text-align: left;
    &::before {
      color: rgb(var(--huwaBrandRgb));
    }
    &.highlight::before {
      content: '❚'; // 원하는 내용을 여기에 추가하세요.
      color: rgb(var(--huwaBrandRgb));
      margin-right: 0.5rem; // 아이콘과 텍스트 사이의 간격을 조정합니다.
    }
    &.highlight {
      font-weight: bold; // 강조된 항목의 텍스트를 bold로 만듭니다.
    }
  }
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  line-height: 2;
  padding: 1rem 0;
  margin: 1rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CustomButton = styled(Button)`
  width: 50%;
  font-size: 1.8rem;
  color: rgb(var(--text));
  border-radius: 1rem;
  padding: 1.4rem 2rem;
  margin-top: 1.5rem;
`;
