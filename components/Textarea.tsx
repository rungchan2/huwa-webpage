import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

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

const Textarea: React.FC<PropsWithChildren<TextareaProps>> = ({ label, children, ...props }) => (
  <TextareaWrapper>
    {label && <TextareaLabel>{label}</TextareaLabel>}
    <StyledTextarea {...props} />
    {children}
  </TextareaWrapper>
);

export default Textarea;