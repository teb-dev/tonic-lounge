import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import theme from '@src/styles/theme';
import React from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';

import CreateBadgeForm from './CreateBadgeForm';
const DEFAULT_VALUES: DefaultValues<CreateBadgeFormTypes> = {
  title: '',
  description: '',
  image: '',
  owner: '',
  walletLists: [],
  email: '',
};

export interface CreateBadgeFormTypes {
  title: string;
  description: string;
  image: string;
  owner: string;
  walletLists: Array<string>;
  email: string;
}

function CreateBadge() {
  const TITLE = 'Create Your Own Tonic Badge';
  const schema = yup.object().shape({
    title: yup.string().required('title is required.'),
    description: yup.string().required('description is required'),
    image: yup.string().required('image is required'),
    owner: yup.string().required('owner is required'),
    walletLists: yup.string().required('walletLists is required'),
    email: yup.string().required('email is required'),
  });

  const methods = useForm<CreateBadgeFormTypes>({
    resolver: yupResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onChange',
  });

  const {
    handleSubmit,
    watch,
    formState: { dirtyFields },
  } = methods;

  const onSubmit = (data: CreateBadgeFormTypes) => {
    const notify = confirm('Are you sure you want to create the badge?');

    console.log('notify', notify);
    console.log('data', data);
  };

  return (
    <StSection>
      <StTitle>{TITLE}</StTitle>
      <StLine />
      <StForm className="w-[560px]" onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <CreateBadgeForm />
        </FormProvider>
      </StForm>
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
