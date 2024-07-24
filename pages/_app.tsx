import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { AppProps } from 'next/dist/shared/lib/router/router';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { ColorModeScript } from 'nextjs-color-mode';
import React, { PropsWithChildren } from 'react';
// import { TinaEditProvider } from 'tinacms/dist/edit-state';

import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { EnvVars } from 'env';
import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Portfolio', href: '/portfolio' },
  // { title: 'Huwa-Log', href: '/blog' },
  { title: 'Price', href: '#pricetable', price: true },
  { title: '제작 상담하기', href: '/contact', black: true },
  // { title: '자주 묻는 질문', href: '/faq', faq: true },
];

// const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="favicon" type="image/png" href="../public/favicon" />
        <meta name="google-site-verification" content="BJsapPqz-n7_yU8kf2p0sipQRhX8I805eFumJ-RKC1A" />
        <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" />
        <meta name="naver-site-verification" content="a96cdcaa7e61f58935be09d3dc67282ae0708ac5" />
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-05VGYYLCD4" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-05VGYYLCD4');
        `}
      </Script>

      <Script
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5Z2X2JX');`,
        }}
      />

      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LRSLRG7THC"></Script>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LRSLRG7THC');
            `}
      </Script> */}

      <ColorModeScript />
      <GlobalStyle />

      <Providers>
        <Modals />
        <Navbar items={navItems} />

        {(livePageProps: any) => <Component {...livePageProps} />}
        <Component {...pageProps} />
        <WaveCta />
        <Footer />
      </Providers>
    </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
  if (!isModalOpened) {
    return null;
  }
  return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
}

export default MyApp;
