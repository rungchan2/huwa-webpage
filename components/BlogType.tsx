"use client";

import { useState } from 'react';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { BlogContext } from '../pages/blog/index';
import { media } from '../utils/media';
import { RxDividerVertical } from "react-icons/rx";

const blogTypes = [
    { value: 'all', label: '전체보기' },
    { value: 'dev', label: '개발 인사이트' },
    { value: 'design', label: '디자인 인사이트' },
    { value: 'daily', label: '데일리 후와' },
    { value: 'interview', label: 'Huwa_Interview' },
    { value: 'instagram', label: 'Instagram' }
  ];

export default function BlogType() {

  const {blog, setBlog} = useContext(BlogContext);

  return (
    <TypeContainer>
      {blogTypes.map((type) => (
        <TypeButton
          key={type.value}
          isActive={blog === type.value}
          onClick={() => setBlog(type.value as any)}
        >
          {type.label}
        </TypeButton> 
        
      ))}
    </TypeContainer>
  );
};

const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 3rem;
  margin-bottom: 10rem;

  ${media('<=tablet')} {
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 5rem;
    margin-top: none;
  }
`;

const TypeButton = styled.button<{ isActive: boolean }>`
display: flex;
    align-items
  padding: 8px 16px;
  border: none;
  font-size: 1.6rem;
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
  background-color: transparent;
  color: ${(p) => (p.isActive ? 'var(--huwaBrand)' : 'var(--text)')};
  cursor: pointer;
  transition: all 0.1s ease;

  ${media('<=tablet')} {
    border-bottom: 1px solid ${(p) => (p.isActive ? 'var(--huwaBrand)' : 'var(--black)')};
    padding: 8px 0;

    &:not(:first-child):before {
        content: ' | ';
        display: none;
        }
  }

    &:not(:first-child):before {
        content: ' | ';
        margin-right: 3rem;
        color: var(--text);
        }

`;