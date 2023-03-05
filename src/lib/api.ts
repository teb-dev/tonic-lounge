import { LoungeResponse } from '@src/types';
import axios from 'axios';

export const getLounges = async (page: number) => {
  const { data }: { data: LoungeResponse } = await axios.get(`/api/lounges?page=${page}`);

  return data;
};
