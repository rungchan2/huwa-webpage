import { PropsWithChildren, useEffect, useState, } from 'react';
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
  const [isToggled, setIsToggled] = useState(true);
  const isAnyBenefitPresent = benefits?.length;

  useEffect(() => {
    const handleResize = () => {
      const pageWidth = window.innerWidth;
      if (pageWidth < 375) {
        setIsToggled(false);
      } else {
        setIsToggled(true);
      }
    };

    handleResize(); // Check initial window size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper isOutlined={isOutlined}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {isToggled && isAnyBenefitPresent && (
        <PriceContainer>
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                <li
                  key={idx}
                  className={
                    singleBenefit.startsWith('페이지') ||
                    singleBenefit.startsWith('페이지 (최대높이:3000px)') ||
                    singleBenefit.startsWith('섹션 추가') ||
                    singleBenefit.startsWith('섹션 추가 (한섹션당 2000px)') ||
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
        </PriceContainer>
      )}
      <Price>{children}</Price>
      <ButtonContainer>
        {!isToggled && <SeeMoreButton onClick={() => setIsToggled(true)}>더보기</SeeMoreButton>}
        {isToggled && <SeeMoreButton onClick={() => setIsToggled(false)}>닫기</SeeMoreButton>}
        <CustomButton href="/contact" brand>
          견적서 요청
        </CustomButton>
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

  ${media('<=desktop')} {
    font-size: 3rem;
  }

  ${media('<=tablet')} {
    font-size: 2.7rem;
  }
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

  ${media('<=desktop')} {
    font-size: 3rem;
    span {
      font-size: 1.5rem;
    }
  }
  ${media('<=tablet')} {
    font-size: 2.5rem;

    span {
      font-size: 1.7rem;
    }
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

  ${media('<=desktop')} {
    width: 70%;
    font-size: 1.6rem;
    padding: 1.2rem 1.8rem;
  }

  ${media('<=tablet')} {
    width: 100px;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  }
`;

const SeeMoreButton = styled(Button)`
  width: 50%;
  font-size: 1.8rem;
  color: rgb(var(--text));
  font-color: rgb(var(--text));
  background: var(--grey);
  border-radius: 1rem;
  padding: 1.4rem 2rem;
  margin-top: 1.5rem;

  ${media('<=desktop')} {
    width: 70%;
    font-size: 1.6rem;
    padding: 1.2rem 1.8rem;
  }

  ${media('<=tablet')} {
    width: 100px;
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  }
  
  ${media('>=phone')} {
    display: none;
  }
`;
