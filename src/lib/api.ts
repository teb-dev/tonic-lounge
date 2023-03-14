import { LoungeResponse } from '@src/types';
import axios from 'axios';
const URL = 'http://ec2-3-37-70-35.ap-northeast-2.compute.amazonaws.com:3000';
const BUCKET_URL = 'https://tonic-lounge-nft.s3.ap-northeast-2.amazonaws.com/';

export const getLounges = async (page: number) => {
  const { data }: { data: LoungeResponse } = await axios.get(`${URL}/lounges?page=${page}`);

  return data;
};

export const getBadges = async (walletAddress: string) => {
  if (!walletAddress) return null;
  const { data } = await axios.get(`${URL}/badges/${walletAddress}`);

  console.log('data', data);

  return data;
};

export const uploadImageToS3 = async (file: File) => {
  const { data } = await axios.post('/api/s3/uploadFile', {
    name: file.name,
    type: file.type,
  });

  const { url } = data;

  await axios.put(url, file, {
    headers: {
      'Content-type': file.type,
      'Access-Control-Allow-Origin': '*',
    },
  });

  return BUCKET_URL + file.name;
};

export const createBadge = async (
  title: string,
  description: string,
  image: File | null,
  email: string,
  walletLists: Array<string>,
) => {
  const { data } = await axios.post('/badges', {
    title,
    image,
    description,
    email,
    walletLists,
  });
  const { url } = data;

  return url;
};
