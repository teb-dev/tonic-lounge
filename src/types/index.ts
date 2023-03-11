export type LoungeData = {
  name: string;
  requirement: string;
  image: string;
  redirectUrl: string;
  check?: boolean;
  type?: 'ton' | 'jetton';
};

export interface LoungeResponse {
  data: LoungeData[];
  total: number;
}

export interface csvFile {
  parsedData: Array<FreeObject>;
  originalFile: File;
}
export interface CSV {
  data: Array<{ [key: string]: string }>;
  error: any;
  meta: any;
}
