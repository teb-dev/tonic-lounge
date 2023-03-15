import { deployNftCollection } from '@src/lib/nft';
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

export const enterLounge = async (userId: string, redirectUrl: string, title: string) => {
  await axios.post(`${URL}/bot`, {
    link: redirectUrl,
    id: userId,
    title,
  });
};

export const createBadge = async (
  title: string,
  description: string,
  image: File | null,
  email: string,
  walletLists: Array<string>,
  userFriendlyAddress: string,
  tonConnectUI: any,
) => {
  const formData = new FormData();

  formData.append('title', title);
  formData.append('description', description);
  formData.append('email', email);
  formData.append('walletLists', JSON.stringify(walletLists));
  if (image) {
    formData.append('image', image);
  }
  await axios.post(URL + '/badges', formData).then(async (response) => {
    const { data } = await axios.get(URL + `/badges/id/${response.data.data.insertId}`);

    deployNftCollection(userFriendlyAddress, tonConnectUI, data.data[0].nftItemContentBaseUri);

    return data;
  });
};
