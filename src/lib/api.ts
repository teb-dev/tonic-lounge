import { LoungeResponse } from '@src/types';
import axios from 'axios';
const URL = 'http://ec2-3-37-70-35.ap-northeast-2.compute.amazonaws.com:3000';

export const getLounges = async (page: number) => {
  const { data }: { data: LoungeResponse } = await axios.get(`${URL}/api/lounges?page=${page}`);

  console.log('data', data);

  return data;
};

export const pingBot = async (telegramId: string, index: number) => {
  await axios.post(`${URL}/bot`, {
    id: telegramId,
    link: index,
  });
};
