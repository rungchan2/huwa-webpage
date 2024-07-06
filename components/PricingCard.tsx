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
                <li key={idx}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>
      <Price>{children}</Price>
      <CustomButton brand>견적서 요청</CustomButton>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 2rem;
  border: 1px solid #D9D9D9;
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
  flex-grow: 1; // Add this line
  display: flex; // Add this line
  flex-direction: column; // Add this line
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

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const CustomRichText = styled(RichText)`
  flex-grow: 1; // Add this line
  display: flex; // Add this line
  flex-direction: column; // Add this line
  justify-content: top; // Add this line
  li {
    text-align: left;
  }
  border-bottom: 1px solid #d9d9d9;
  border-top: 1px solid #d9d9d9;
  line-height: 2;
  padding: 1rem 0; // Add some padding
  margin: 1rem 0; // Add some margin
`;

const CustomButton = styled(Button)`
  width: 100%;
  font-size: 2rem;
  color: rgb(var(--text));
`;
