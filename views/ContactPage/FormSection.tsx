import { DevTool } from '@hookform/devtools';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import MailSentState from 'components/MailSentState';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

interface EmailPayload {
  company: string;
  name: string;
  contact: string;
  service: string;
  url: string;
  referenceSite: string;
  description: string;
  meeting: string;
}

export default function FormSection() {
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  const [hasErrored, setHasErrored] = useState(false);

  const { register, handleSubmit, formState, control } = useForm();
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;

  console.log(isSubmitSuccessful, isSubmitting, isSubmitted, errors);

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: '후와 문의가 도착했습니다.', ...payload }),
      });

      if (res.status !== 204) {
        setHasErrored(true);
      }
    } catch {
      setHasErrored(true);
      return;
    }

    setHasSuccessfullySentMail(true);
  }

  const isSent = isSubmitSuccessful && isSubmitted;
  const isDisabled = isSubmitting || isSent;
  const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;

  if (hasSuccessfullySentMail) {
    return <MailSentState />;
  }

  return (
    <Wrapper>
      <CustomSectionTitle>
        {media('<=tablet') ? (
          '후와 스튜디오에 프로젝트를 문의해보세요.'
        ) : (
          <>
            후와 스튜디오에 프로젝트를 <br /> 문의해보세요.
          </>
        )}{' '}
      </CustomSectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage>이메일을 보낼 수 없습니다. 다시 시도해 주세요.</ErrorMessage>}

        <Section>
          <SectionNumber>01</SectionNumber>
          <SectionHeading>기본정보</SectionHeading>
          <InputGroup>
            <InputStack>
              {errors.company && <ErrorMessage>회사/단체명은 필수입니다</ErrorMessage>}
              <InputWrapper>
                <InputLabel>회사/단체명</InputLabel>
                <StyledInput
                  {...register('company', { required: true })}
                  disabled={isDisabled}
                  id="company"
                  name="company"
                  placeholder="ex) 후와 스튜디오"
                />
              </InputWrapper>
            </InputStack>
            <InputStack>
              {errors.name && <ErrorMessage>성함/직책은 필수입니다</ErrorMessage>}
              <InputWrapper>
                <InputLabel>성함/직책</InputLabel>
                <StyledInput
                  {...register('name', { required: true })}
                  disabled={isDisabled}
                  id="name"
                  name="name"
                  placeholder="ex) 김철수/디자인"
                />
              </InputWrapper>
            </InputStack>
            <InputStack>
              {errors.contact && <ErrorMessage>연락처는 필수입니다</ErrorMessage>}
              <InputWrapper>
                <InputLabel>연락처</InputLabel>
                <StyledInput
                  {...register('contact', { required: true })}
                  disabled={isDisabled}
                  id="contact"
                  name="contact"
                  placeholder="ex) 010-1234-5678"
                />
              </InputWrapper>
            </InputStack>
          </InputGroup>
        </Section>

        <Section>
          <SectionNumber>02</SectionNumber>
          <SectionHeading>상세정보</SectionHeading>
          <InputGroup>
            <ServiceSelection>
              <ServiceLabel>
                서비스 선택
                <ServiceButton>
                  <Link href="/#pricetable" passHref>
                    상세 보기
                  </Link>
                </ServiceButton>
              </ServiceLabel>

              <ServiceOptions>
                <ServiceOption>
                  <input type="radio" id="service" value="MVP 랜딩페이지" {...register('service', { required: true })} />
                  <label htmlFor="mvp">MVP 랜딩페이지</label>
                </ServiceOption>
                <ServiceOption>
                  <input type="radio" id="service" value="일반형 홈페이지" {...register('service')} />
                  <label htmlFor="fullpage">일반형 홈페이지</label>
                </ServiceOption>
                <ServiceOption>
                  <input type="radio" id="service" value="브랜드 홈페이지" {...register('service')} />
                  <label htmlFor="brand">브랜드 홈페이지</label>
                </ServiceOption>
                <ServiceOption>
                  <input type="radio" id="service" value="기타 요청" {...register('service')} />
                  <label htmlFor="other">기타 요청</label>
                </ServiceOption>
              </ServiceOptions>
            </ServiceSelection>
            <InputStack>
              <InputWrapper>
                <InputLabel>[보유시] 운영중인 사이트 URL</InputLabel>
                <StyledInput
                  {...register('url', { required: true })}
                  disabled={isDisabled}
                  id="url"
                  name="url"
                  placeholder="ex) [보유시] 운영중인 사이트 URL"
                />
              </InputWrapper>
            </InputStack>
            <InputStack>
              {errors.referenceSite && <ErrorMessage>참고 사이트는 필수입니다</ErrorMessage>}
              <InputWrapper>
                <InputLabel>참고 사이트</InputLabel>
                <StyledInput
                  {...register('referenceSite', { required: true })}
                  disabled={isDisabled}
                  id="referenceSite"
                  name="referenceSite"
                  placeholder="ex) https://huwastudio.co.kr"
                />
              </InputWrapper>
            </InputStack>
            <InputStack>
              {errors.description && <ErrorMessage>회사 및 서비스 설명은 필수입니다</ErrorMessage>}
              <TextareaWrapper>
                <TextareaLabel>요구사항</TextareaLabel>
                <StyledTextarea
                  id="description"
                  disabled={isDisabled}
                  {...register('description', { required: true })}
                  placeholder="요구사항, 홈페이지 제작에 필요한 내용을 자유롭게 적어주세요. 문의를 상세하게 남겨 주실수록 더욱 정확한 상담을 받을 수 있습니다."
                />
              </TextareaWrapper>
            </InputStack>

            <ServiceSelection>
              <ServiceLabel>사전 협의 미팅 여부</ServiceLabel>

              <ServiceOptions>
                <ServiceOption>
                  <input type="radio" id="meeting" value="미팅 요청" {...register('meeting', { required: true })} />
                  <label htmlFor="meeting-yes">미팅 요청</label>
                </ServiceOption>
                <ServiceOption>
                  <input type="radio" id="meeting" value="미요청" {...register('meeting')} />
                  <label htmlFor="meeting-no">미요청</label>
                </ServiceOption>
              </ServiceOptions>
            </ServiceSelection>
          </InputGroup>
        </Section>

        <SubmitButton brand as="button" type="submit" disabled={isSubmitDisabled}>
          작성 완료
        </SubmitButton>
      </Form>
      <DevTool control={control} />
    </Wrapper>
  );
}

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const InputLabel = styled.label`
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--text);

  &::after {
    content: '*';
    color: red;
    margin-left: 2px;
  }

  ${media('<=tablet')} {
    font-size: 1.2rem;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 24px 12px 24px;
  font-size: 18px;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background-color: white;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #999;
  }
  ${media('<=tablet')} {
    font-size: 1.2rem;
    padding: 12px;
  }
`;

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background-color: white;
`;

const TextareaLabel = styled.label`
  position: absolute;
  top: 12px;
  left: 16px;
  font-size: 1.7rem;
  font-weight: bold;
  color: #333;

  &::after {
    content: '*';
    color: red;
    margin-left: 2px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 48px 16px 12px;
  font-size: 16px;
  border: none;
  background-color: transparent;
  resize: vertical;
  font-size: 18px;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
  }
`;

const CustomSectionTitle = styled(SectionTitle)`
  margin-bottom: 4rem;
  text-align: left;
  line-height: 1.5;

  ${media('<=tablet')} {
    font-size: 3rem;
  }
`;

const Wrapper = styled.div`
  padding: 2rem;
  width: 100%; // Ensures the wrapper takes full width
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 2rem;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionHeading = styled.h2`
  font-size: 3rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const SectionNumber = styled.div`
  font-size: 2rem;
  color: var(--huwaBrand);
  margin-bottom: 1rem;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

const ServiceSelection = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const ServiceLabel = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 2.25em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  ${media('<=tablet')} {
    font-size: 2em;
  }
`;

const ServiceButton = styled(Button)`
  background-color: #ffc107;
  color: white;
  font-size: 1.5rem;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #ff8c00;
  }
  &:focus {
    outline: none;
  }
`;

const ServiceOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  justify-content: space-between;
  max-width: 800px;
  ${media('<=tablet')} {
    display: grid;
  }
`;

const ServiceOption = styled.div`
  display: flex;
  align-items: left;
  gap: 0.2rem;
  font-size: 2.25rem;
  input {
    cursor: pointer;
    width: 2rem;
  }

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }
`;

const SubmitButton = styled(Button)`
  padding: 1rem 3rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 2rem;
  margin-left: auto; /* This aligns the button to the right */
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
