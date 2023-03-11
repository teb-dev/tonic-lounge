import styled from '@emotion/styled';
import theme from '@src/styles/theme';
import { getCleanedData } from '@src/utils/uploadFile';
import Papa from 'papaparse';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

function UploadCsv() {
  const [inputFileName, setInputFileName] = useState('');
  const allowedExtensions = ['csv'];
  const { setValue } = useFormContext();

  const getFileData = async () => {
    try {
      const input = document.createElement('input');
      let inputFile;
      let parsedData;

      input.type = 'file';
      input.accept = 'csv';

      input.onchange = (_) => {
        const files = Array.from(input?.files as ArrayLike<File>);

        inputFile = files[0];
        const fileExtension = inputFile?.type.split('/')[1];

        if (!allowedExtensions.includes(fileExtension)) {
          alert('Please input a csv file');

          return;
        }
        setInputFileName(inputFile?.name as string);
        const reader = new FileReader();

        reader.onload = async ({ target }) => {
          const csv = Papa.parse(target?.result as string, { header: false });

          parsedData = csv?.data as Array<Array<string>>;
          const result = getCleanedData(parsedData);

          setValue('walletLists', result, { shouldDirty: true, shouldValidate: true });
        };

        reader.readAsText(inputFile);
      };
      input.click();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <StButton onClick={getFileData}>Attach CSV file</StButton>
      {inputFileName ? (
        <StWarning>{inputFileName}</StWarning>
      ) : (
        <StWarning>IF YOU DON’T UPLOAD ALLOWED WALLETS, ANYONE CAN’T CLAIM YOUR BADGE</StWarning>
      )}
    </>
  );
}

export default UploadCsv;
const StButton = styled.button`
  padding: 10px 20px;

  background: rgba(255, 255, 255, 0.2);

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;

  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${theme.colors.tonicWhite};
  cursor: pointer;
  margin: 12px 0px 8px 0px;
`;

const StWarning = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(255, 255, 255, 0.8);
`;
