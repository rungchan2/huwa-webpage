import NextLink from 'next/link';
// import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import Container from 'components/Container';
import LogoWhite from 'components/LogoWhite';
import LogowhiteText from 'components/LogoWhiteText';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Information',
    items: [
      { title: '회사명 : 몬스터 협동조합', href: '/' },
      { title: '대표자명 : 강승원', href: '/' },
      { title: '사업자 등록번호 : 345-55-24342', href: '/' },
    ],
  },
  {
    title: 'Address',
    items: [
      { title: '서울시 서대문구 이화로 88길', href: '/' },
      { title: '우편번호 03766', href: '/' },
    ],
  },
  {
    title: 'Contact',
    items: [{ title: 'monster.coop8@gmail.com', href: '/' }],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          <LogoContainer>
            <LogoWhite />
            <LogowhiteText />
          </LogoContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <Copyright>&copy; Copyright 몬스터 협동조합</Copyright>
          <ShareBar>
            <SocialIcon url="https://www.instagram.com/" bgColor="transparent" style={{ width: '40px', height: '40px' }} />
            <SocialIcon url="https://www.facebook.com/" bgColor="transparent" style={{ width: '40px', height: '40px' }} />
            <SocialIcon url="https://x.com/" bgColor="transparent" style={{ width: '40px', height: '40px' }} />
          </ShareBar>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  gap: 1rem;
  padding: 0 10rem 0 0;

  ${media('<=tablet')} {
    padding: 0 0 8rem 0;
  }
`;

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--blackRgb));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
  ${media('<=tablet')} {
    margin-top: 4rem;
  }

  ${media('<=phone')} {
    margin-top: 4rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
