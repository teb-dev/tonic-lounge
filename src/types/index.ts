export type LoungeData = {
  name: string;
  requirement: string;
  image: string;
  redirectUrl: string;
};

export interface LoungeResponse {
  data: LoungeData[];
  total: number;
}
