import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputLabel = styled.label`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
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

const StyledInput = styled.input`
  width: 100%;
  padding: 24px 24rem 24px;
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
