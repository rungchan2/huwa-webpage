import { InferGetStaticPropsType } from 'next';
import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import BlogType from 'components/BlogType';
import Page from 'components/Page';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/postsFetcher';

export const BlogContext = createContext({
  blog: 'all',
  setBlog: (value: 'all' | 'dev' | 'design' | 'daily' | 'interview' | 'instagram' ) => {},
});

export default function BlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

  const [blog, setBlog] = useState('all');

  return (
    <Page title="후와의 블로그" description="후와의 디자이너, 개발자, 마케터들이 쓰는 블로그를 읽어보세요.">
      <BlogContext.Provider value={{ blog, setBlog }}>
        <BlogType />
        <CustomAutofitGrid>
          {posts
            .filter((post) => blog === 'all' || post.meta.type === blog)
            .map((singlePost, idx) => (
              <ArticleCard
                key={singlePost.slug}
                title={singlePost.meta.title}
                description={singlePost.meta.description}
                imageUrl={singlePost.meta.imageUrl}
                slug={singlePost.slug}
                source={singlePost.meta.source}
              />
            ))}
        </CustomAutofitGrid>
        
      </BlogContext.Provider>
    </Page>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  margin-top: 5rem;
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 350px;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
