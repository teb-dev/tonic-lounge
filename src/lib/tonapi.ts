import { JettonResponse } from '@src/types';
import axios from 'axios';

const SERVER_SIDE_KEY =
  'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiSmRraW04OCJdLCJleHAiOjE4MzYzNjE0MjksImlzcyI6IkB0b25hcGlfYm90IiwianRpIjoiUUlNV1NTNVlRRVhRM0hVVFpDRjNQV1Q0Iiwic2NvcGUiOiJjbGllbnQiLCJzdWIiOiJ0b25hcGkifQ.Z8o-qKWnJxlncdfX0zrSVxheyiQpv4N-dIzeKCnKvrijZXZhFdGqmTbcxq2raCt3AkR8QigwGQbfhLUHAT0RAQ';
const URL = 'https://tonapi.io/v1';

export const getNFTs = async (walletAddress: string) => {
  return (
    await axios.get(
      `${URL}/nft/searchItems?owner=${walletAddress}&include_on_sale=true&limit=1000&offset=0`,
      {
        headers: {
          Authorization: 'Bearer ' + SERVER_SIDE_KEY,
          'Content-Type': 'application/json',
        },
      },
    )
  ).data.nft_items;
};

export const getJettons = async (walletAddress: string) => {
  return (
    await axios.get(`${URL}/jetton/getBalances?account=${walletAddress}`, {
      headers: {
        Authorization: 'Bearer ' + SERVER_SIDE_KEY,
        'Content-Type': 'application/json',
      },
    })
  ).data.balances;
};
