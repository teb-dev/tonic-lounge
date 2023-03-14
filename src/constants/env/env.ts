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

export const environment: EApiEndpoint = EApiEndpoint.main;

export const apiEndpoint: IApiEndpoint = {
  main: 'http://tonic-lounge.io.s3-website.ap-northeast-2.amazonaws.com',
  test: '',
  local: 'http://localhost:3000',
};

export const getApiEndpoint = (): string => {
  return apiEndpoint[environment];
};
