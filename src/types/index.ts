export type LoungeData = {
  title: string;
  description: string;
  requirements: requirement[];
  imageUrl: string;
  redirectUrl: string;
  isApproved?: boolean;
};

type requirement = {
  type?: 'nft' | 'balance';
  requirement?: string;
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
