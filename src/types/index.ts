export type LoungeData = {
  title: string;
  description: string;
  requirements: requirement[];
  imageUrl: string;
  redirectUrl: string;
  isApproved?: boolean;
  user: any;
  enterLounge: any;
};

export type requirement = {
  type?: 'nft' | 'ton' | 'jetton';
  address?: string;
  amount: number;
};

export interface LoungeResponse {
  data: LoungeData[];
  total: number;
}
export interface CSV {
  data: Array<{ [key: string]: string }>;
  error: any;
  meta: any;
}

export interface JettonResponse {
  balances: JettonData[];
}

export interface JettonData {
  balance: string;
  jetton_address: string;
  metadata: JettonMetadata;
  verification: string;
  wallet_address: JettonWallet;
}

export type JettonMetadata = {
  address: string;
  name: string;
  decimals: number;
  image: string;
  symbol: string;
  vericiation: string;
};

export type JettonWallet = {
  address: string;
  icon: string;
  is_scam: boolean;
  name: string;
};
