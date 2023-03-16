import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { createBadge } from '@src/lib/api';
import { getTon } from '@src/lib/tonapi';
import theme from '@src/styles/theme';
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import React, { useEffect, useState } from 'react';
import { DefaultValues, FormProvider, useForm, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

import CreateBadgeForm from './CreateBadgeForm';
const DEFAULT_VALUES: DefaultValues<CreateBadgeFormTypes> = {
  title: '',
  description: '',
  image: null,
  walletLists: [],
  email: '',
};

export interface CreateBadgeFormTypes {
  title: string;
  description: string;
  image: File | null;
  walletLists: Array<string>;
  email: string;
}

function CreateBadge() {
  const TITLE = 'Create Your Own Lounge Pass';
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAbleToSubmit, setIsAbleToSubmit] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const userFriendlyAddress = useTonAddress();
  const [ton, setTon] = useState(0);
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const schema = yup.object().shape({
    title: yup.string().max(100).required('title is required.'),
    description: yup.string().required('description is required'),
    // image: yup.mixed().required('image is required'),
    walletLists: yup.string().required('walletLists is required'),
    email: yup.string().email('Must be a valid email').max(255).required('email is required'),
  });

  const methods = useForm<CreateBadgeFormTypes>({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const getTonBalance = async (walletAddress: string) => {
    if (walletAddress) {
      const tonBalance: number = await getTon(walletAddress);

      setTon(tonBalance / Math.pow(10, 9));
    }
  };

  useEffect(() => {
    getTonBalance(userFriendlyAddress);
    setWalletAddress(userFriendlyAddress);
  }, [ton, userFriendlyAddress]);

  console.log('wallet', walletAddress);
  const {
    // handleSubmit,
    watch,
    getValues,
    formState: { dirtyFields },
  } = methods;

  const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    confirm('Are you sure you want to create the pass?');
    const { title, description, image, walletLists, email } = getValues();

    createBadge(title, description, image, email, walletLists, userFriendlyAddress, tonConnectUI);
    setIsSubmit(true);
    //deployNftCollection(userFriendlyAddress, tonConnectUI, result.nftItemContentBaseUri);

    // TODO getValues()로 받아온 값들을 서버로 보내야함
  };

  const titleValue = watch('title');

  return (
    <StSection>
      <StTitle>{TITLE}</StTitle>
      <StLine />
      {isSubmit ? (
        <StForm className="w-[560px]">
          <FormProvider {...methods}>
            <CreateBadgeForm
              setIsAbleToSubmit={setIsAbleToSubmit}
              titleLength={titleValue.length}
            />
          </FormProvider>
          <StLine />
          <StCreateButton type="submit" disabled={true} value="Done!" />
        </StForm>
      ) : (
        <StForm className="w-[560px]" onSubmit={HandleSubmit}>
          <FormProvider {...methods}>
            <CreateBadgeForm
              setIsAbleToSubmit={setIsAbleToSubmit}
              titleLength={titleValue.length}
            />
          </FormProvider>
          <StLine />
          {walletAddress ? (
            ton < 0.05 ? (
              <StCreateButton type="submit" disabled={true} value="Not enough TON" />
            ) : (
              <StCreateButton type="submit" disabled={!isAbleToSubmit} value="Create" />
            )
          ) : (
            <StCreateButton type="submit" disabled={true} value="Connect your wallet first !" />
          )}
        </StForm>
      )}
    </StSection>
  );
}

export default CreateBadge;

const StSection = styled.section`
  width: 700px;
  height: 1108px;
  left: 120px;
  top: 428px;

  background: rgba(255, 255, 255, 0.2);
  /* tonic wallet/white-40 */

  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  padding: 40px;
  margin-bottom: 40px;
`;

const StTitle = styled.h1`
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: ${theme.colors.tonicWhite};
`;

const StLine = styled.div`
  width: 620px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
  margin: 24px 0px;
`;

const StForm = styled.form``;
// const StPureButton = styled.button`
//   // remove default button styles
//   border: none;
//   outline: none;
//   cursor: pointer;
// `;
const StCreateButton = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  width: 620px;
  height: 56px;

  background: ${theme.colors.tonicWhite};
  border-radius: 12px;
  font-family: 'Unbounded';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;

  color: ${theme.colors.tonicSecondary};
  :disabled {
    background: ${theme.colors.tonicWhite};
    color: ${theme.colors.tonicSecondary};
    opacity: 0.5;
  }
`;
