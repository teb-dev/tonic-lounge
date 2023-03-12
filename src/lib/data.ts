import { LoungeData } from '@src/types';

export const loungesData: LoungeData[] = [
  {
    title: 'TON HODlrs',
    description: 'Own at least 1,000 TON tokens',
    imageUrl: 'https://s3.coinmarketcap.com/static/img/portraits/6304d4f7dcf54d0fb59743ba.png',
    redirectUrl: 'https://t.me/+spWdZ1pUuyQyOThl',
    requirements: [
      {
        type: 'balance',
        requirement: '1000',
      },
    ],
  },
];
