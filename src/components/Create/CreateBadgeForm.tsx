import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React from 'react';
import { useFormContext } from 'react-hook-form';

import UploadImage from './UploadImage';

function CreateBadgeForm() {
  const { register } = useFormContext();

  return (
    <>
      <StTitle>Display Image</StTitle>
      <UploadImage />
      <StLabel className="label w-full" htmlFor="title">
        Display Title
      </StLabel>
      <StInput type="text" placeholder="Name Your Tonic Badge" id="title" {...register('title')} />
      <StLabel className="label w-full" htmlFor="email">
        Description
      </StLabel>
      <StTextArea
        placeholder="Explain how it stands out and Describe meaning of your badge"
        id="description"
        {...register('description')}
      />
      <StLabel className="label w-full" htmlFor="email">
        E-mail
      </StLabel>
      <StInput
        type="email"
        placeholder="Enter your email to get notified after uploading"
        id="email"
        {...register('email')}
      />
      <StTitle>Wallet Allow</StTitle>
      <StMoreInfo>format : 1 column with wallet addresses</StMoreInfo>
      <StWarning>IF YOU DON’T UPLOAD ALLOWED WALLETS, ANYONE CAN’T CLAIM YOUR BADGE</StWarning>
    </>
  );
}

export default CreateBadgeForm;

const StTitle = styled.h2`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: ${theme.colors.tonicWhite};
  margin-bottom: 12px;
`;

const StLabel = styled.label`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  height: 22px;

  color: ${theme.colors.tonicWhite};
`;

const StInput = styled.input`
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;
  width: 620px;
  height: 56px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: ${theme.colors.tonicWhite};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.6);
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.6);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StTextArea = styled.textarea`
  width: 620px;
  height: 120px;
  margin: 12px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: ${theme.colors.tonicWhite};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.6);
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.6);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.6);
  }
`;

const StMoreInfo = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: ${theme.colors.tonicWhite};
`;

const StWarning = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(255, 255, 255, 0.8);
`;
