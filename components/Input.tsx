import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {media} from 'utils/media';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
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

const Input: React.FC<PropsWithChildren<InputProps>> = ({ label, children, ...props }) => (
  <InputWrapper>
    {label && <InputLabel>{label}</InputLabel>}
    {null}
    <StyledInput {...props} />
    {children}
  </InputWrapper>
);

export default Input;
