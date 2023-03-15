import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import React, { useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import UploadCsv from './UploadCsv';
import UploadImage from './UploadImage';

interface CreateBadgeFormProps {
  setIsAbleToSubmit: (value: boolean) => void;
  titleLength: number;
}

function CreateBadgeForm({ setIsAbleToSubmit, titleLength }: CreateBadgeFormProps) {
  const { register, getValues } = useFormContext();
  const { watch } = useForm();
  //   const titleValue = watch('title');

  //   useEffect(() => {
  //     console.log('titleValue', titleValue);
  //   }, [titleValue]);

  useEffect(() => {
    const currentValue = getValues();

    console.log('currentValue', currentValue);
    if (
      currentValue?.title !== '' &&
      currentValue?.description !== '' &&
      currentValue?.image !== '' &&
      currentValue?.walletLists?.length !== 0 &&
      currentValue?.email !== ''
    ) {
      setIsAbleToSubmit(true);
    }
  }, [getValues(), getValues]);

  return (
    <>
      <StTitle>Display Image</StTitle>
      <UploadImage />
      <StTitleArea>
        <StLabel htmlFor="title">Display Title</StLabel>
        <StTitleLength>{titleLength}/25</StTitleLength>
      </StTitleArea>
      <StInput
        type="text"
        placeholder="Name Your Tonic Badge"
        id="title"
        maxLength={25}
        {...register('title', { required: true, maxLength: 25 })}
      />
      <StLabel htmlFor="email">Description</StLabel>
      <StTextArea
        placeholder="Explain how it stands out and Describe meaning of your badge"
        id="description"
        {...register('description')}
      />
      <StLabel htmlFor="email">E-mail</StLabel>
      <StInput
        type="email"
        placeholder="Enter your email to get notified after uploading"
        id="email"
        {...register('email')}
      />
      <StTitle>Whitelist</StTitle>
      <StMoreInfo>Format: An excel .csv file with 1 column of TON wallet addresses</StMoreInfo>
      <UploadCsv />
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

const StTitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 620px;
  height: 22px;
  align-items: center;
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

const StTitleLength = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

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
