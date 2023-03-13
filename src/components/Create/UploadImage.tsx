import styled from '@emotion/styled';
import { uploadImageToS3 } from '@src/lib/api';
import theme from '@src/styles/theme';
import { isValidImage } from '@src/utils/uploadFile';
import UploadFile from 'public/assets/UploadFile.svg';
import React, { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useFormContext } from 'react-hook-form';
import ClipLoader from 'react-spinners/ClipLoader';

interface StFileLabelType {
  previewImage: string;
}

function UploadImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const { setValue, getValues } = useFormContext();

  const setImageFileToForm = (file: File) => {
    setValue('image', file, { shouldDirty: true, shouldValidate: true });
  };

  const getPreviewImage = async (file: File) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setPreviewImage(reader.result as string);

        resolve();
        flushSync(() => {
          setIsLoading(false);
        });
      };
    });
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    flushSync(() => {
      setIsLoading(true);
    });
    const file = e?.target?.files && e.target.files[0];

    if (!file) {
      alert('fail to upload file');
      setIsLoading(false);

      return;
    }

    if (isValidImage(file) === false) {
      alert('Invalid image file');
      setIsLoading(false);

      return;
    }
    setImageFileToForm(file);
    await getPreviewImage(file);
  };

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  useEffect(() => {
    if (getValues().image) {
      getPreviewImage(getValues().image);
    }
  }, [getValues]);

  return (
    <StSection>
      {previewImage && (
        <StImage
          src={previewImage}
          alt="badge"
          onClick={handleClick}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          tabIndex={0}
        />
      )}
      {isLoading ? (
        <StLoaderWrapper>
          <ClipLoader color="#FFFFFF" loading={isLoading} size={50} />
        </StLoaderWrapper>
      ) : (
        <>
          <UploadFile />
          <StFileLabel htmlFor="input-file" previewImage={previewImage}>
            Upload
            <StFileUploadInput
              ref={inputFileRef}
              type="file"
              onChange={handleChange}
              id="input-file"
            />
          </StFileLabel>
        </>
      )}
    </StSection>
  );
}

export default UploadImage;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 620px;
  height: 252px;

  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;

  margin-bottom: 12px;
`;
const StFileLabel = styled.label<StFileLabelType>`
  ${({ previewImage }) =>
    previewImage
      ? 'display: none'
      : `
    padding: 10px 20px;

height: 48px;
background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.4);
border-radius: 12px;
cursor: pointer;

font-family: 'Unbounded';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
margin-top: 16px;
color: ${theme.colors.tonicWhite};
  `}
`;
const StFileUploadInput = styled.input`
  display: none;
`;

const StImage = styled.img`
  width: 620px;
  height: 252px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  object-fit: cover;
  cursor: pointer;
`;
const StLoaderWrapper = styled.div`
  position: absolute;
  z-index: 20;
`;
