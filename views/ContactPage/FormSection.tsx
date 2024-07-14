import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';
import MailSentState from 'components/MailSentState';
import SectionTitle from 'components/SectionTitle';
import Textarea from 'components/Textarea';


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
  // 이메일 전송 성공 여부를 저장하는 상태 변수
  const [hasSuccessfullySentMail, setHasSuccessfullySentMail] = useState(false);
  // 이메일 전송 실패 여부를 저장하는 상태 변수
  const [hasErrored, setHasErrored] = useState(false);
  // react-hook-form 라이브러리의 register, handleSubmit, formState을 가져옴
  const { register, handleSubmit, formState } = useForm();
  // formState에서 필요한 상태 변수들을 추출
  const { isSubmitSuccessful, isSubmitting, isSubmitted, errors } = formState;
  console.log (isSubmitSuccessful, isSubmitting, isSubmitted, errors)

  async function onSubmit(payload: EmailPayload) {
    try {
      const res = await fetch('../../pages/api.', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject: 'Email from contact form', ...payload }),
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
        후와 스튜디오에 프로젝트를 <br />
        문의해보세요.
      </CustomSectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {hasErrored && <ErrorMessage>이메일을 보낼 수 없습니다. 다시 시도해 주세요.</ErrorMessage>}

        <Section>
          <SectionNumber>01</SectionNumber>
          <SectionHeading>기본정보</SectionHeading>
          <InputGroup>
            <InputStack>
              {errors.company && <ErrorMessage>회사/단체명은 필수입니다</ErrorMessage>}
              <Input
                label="회사/단체명"
                placeholder="ex) 후와 스튜디오"
                id="company"
                disabled={isDisabled}
                {...register('company', { required: true })}
              />
            </InputStack>
            <InputStack>
              {errors.name && <ErrorMessage>성함/직책은 필수입니다</ErrorMessage>}
              <Input
                label="성함/직책"
                placeholder="ex) 김철수/디자인"
                id="name"
                disabled={isDisabled}
                {...register('name', { required: true })}
              />
            </InputStack>
            <InputStack>
              {errors.contact && <ErrorMessage>연락처는 필수입니다</ErrorMessage>}
              <Input
                label="연락처"
                placeholder="ex) 010-1234-5678"
                id="contact"
                disabled={isDisabled}
                {...register('contact', { required: true })}
              />
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
              <ServiceButton >
                <Link  href="/#pricetable" passHref>
                상세 보기
                </Link>
                </ServiceButton>
            </ServiceLabel>
            
            <ServiceOptions>
              <ServiceOption>
                <input type="radio" id="mvp" value="MVP 랜딩페이지" {...register('service', { required: true })} />
                <label htmlFor="mvp">MVP 랜딩페이지</label>
              </ServiceOption>
              <ServiceOption>
                <input type="radio" id="fullpage" value="일반형 홈페이지" {...register('service', )} />
                <label htmlFor="fullpage">일반형 홈페이지</label>
              </ServiceOption>
              <ServiceOption>
                <input type="radio" id="brand" value="브랜드 홈페이지" {...register('service',)} />
                <label htmlFor="brand">브랜드 홈페이지</label>
              </ServiceOption>
              <ServiceOption>
                <input type="radio" id="other" value="기타 요청" {...register('service',)} />
                <label htmlFor="other">기타 요청</label>
              </ServiceOption>
            </ServiceOptions>
          </ServiceSelection>
          <InputStack>
            <Input
              label="[보유시] 운영중인 사이트 URL"
              placeholder="[보유시] 운영중인 사이트 URL"
              id="url"
              disabled={isDisabled}
              {...register('url')}
            />
          </InputStack>
          <InputStack>
            {errors.referenceSite && <ErrorMessage>참고 사이트는 필수입니다</ErrorMessage>}
            <Input
              label="참고 사이트"
              placeholder="ex) https://huwastudio.co.kr"
              id="referenceSite"
              disabled={isDisabled}
              {...register('referenceSite', { required: true })}
            />
          </InputStack>
          <InputStack>
            {errors.description && <ErrorMessage>회사 및 서비스 설명은 필수입니다</ErrorMessage>}
            <Textarea
              label="요구사항"
              placeholder="요구사항, 홈페이지 제작에 필요한 내용을 자유롭게 적어주세요. 문의를 상세하게 남겨 주실수록 더욱 정확한 상담을 받을 수 있습니다."
              id="description"
              disabled={isDisabled}
              {...register('description', { required: true })}
            />
          </InputStack>
          <MeetingOptions>
            <MeetingLabel>사전 협의 미팅 여부*</MeetingLabel>
            <MeetingOption>
              <input type="radio" id="meeting-yes" value="미팅 요청" {...register('meeting',)} />
              <label htmlFor="meeting-yes">미팅 요청</label>
            </MeetingOption>
            <MeetingOption>
              <input type="radio" id="meeting-no" value="미요청" {...register('meeting',)} />
              <label htmlFor="meeting-no">미요청</label>
            </MeetingOption>
          </MeetingOptions>
          </InputGroup>
        </Section>

        <SubmitButton brand as="button" type="submit" disabled={isSubmitDisabled}>
          작성 완료
        </SubmitButton>
      </Form>
    </Wrapper>
  );
}

const CustomSectionTitle = styled(SectionTitle)`
  margin-bottom: 4rem;
  text-align: left;
  line-height: 1.5;
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
  font-size: 2.25em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
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
`;

const ServiceOption = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 2.25rem;
`;

const MeetingOptions = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

const MeetingLabel = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2.25rem;
`;

const MeetingOption = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  margin-right: 1rem;
  font-size: 2.25rem;
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
