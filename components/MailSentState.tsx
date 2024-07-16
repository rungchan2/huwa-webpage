import Image from 'next/image';
import styled from 'styled-components';
import mailimage from '../public/mailimage.png';
import SectionTitle from './SectionTitle';
 
export default function MailSentState() {
  return (
    <Wrapper>
      <SectionTitle>제출이 완료됐습니다!</SectionTitle>
      <p>제출해주신 상담 내용은 전문 상담원이 확인 후 1-2일 내에 답변 드릴 예정입니다. 
      그때까지 잠시만 기다려주시면 감사하겠습니다.</p>
      <Image src={mailimage} alt='mailsentcomplete' width={450} height={495}/>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  align-items: center;

  & > *:not(:first-child) {
    margin-top: 5rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }
    Image {
    display: block;

    }
`;
