import React from 'react';

export enum EApiEndpoint {
  main = 'main',
  test = 'test',
  local = 'local',
}

export interface IApiEndpoint {
  main: string;
  test: string;
  local: string;
}

export const environment: EApiEndpoint = EApiEndpoint.local;

export const apiEndpoint: IApiEndpoint = {
  main: '',
  test: '',
  local: 'http://localhost:3000',
};

export const getApiEndpoint = (): string => {
  return apiEndpoint[environment];
};
