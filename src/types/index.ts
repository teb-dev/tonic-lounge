export type LoungeData = {
  id: number;
  name: string;
  requirement: string;
  image: string;
  redirectUrl: string;
  user: any;
  userFriendlyAddress: any;
  check: boolean;
};

export interface LoungeResponse {
  data: LoungeData[];
  total: number;
}
