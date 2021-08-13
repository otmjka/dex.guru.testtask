import axios, { AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';
import { FilterTypes } from '../typings/FilterTypes';
import { TransactionHistoryRecord } from '../typings/TransactionHistoryRecord';

export type TransactionHistoryConfig = {
  apiUrl: string;
};

const headers = {
  authority: 'api.dex.guru',
  pragma: 'no-cache',
  'cache-control': 'no-cache',
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Xbox; Xbox One) AppleWebKit/537.36 (KHTML, like Gecko)',
  'content-type': 'text/plain;charset=UTF-8',
  accept: '*/*',
  origin: 'https://dex.guru',
  'sec-fetch-site': 'same-site',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  referer: 'https://dex.guru/',
  'accept-language': 'en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,es;q=0.6,cs;q=0.5',
};

const postTokensSwaps = async ({
  config,
  selectedFilter,
  account,
  tokenId,
}: {
  config: TransactionHistoryConfig;
  selectedFilter: FilterTypes;
  account: string;
  tokenId: string;
}) => {
  const requestUrl = `${config.apiUrl}/v2/tokens/${tokenId}/swaps`;
  const requestData: {
    account?: string;
    limit: number;
    order: 'desc';
    sort_by: 'timestamp';
  } = {
    limit: 30,
    order: 'desc',
    sort_by: 'timestamp',
  };

  if (selectedFilter === FilterTypes.account) {
    requestData.account = account;
  }
  let tokensSwapsResponse;
  try {
    tokensSwapsResponse = await axios.post<{
      total: number;
      data: Array<TransactionHistoryRecord>;
    }>(requestUrl, requestData, {
      headers,
    });
  } catch (error) {
    debugger;
    console.log(error);
  }
  return tokensSwapsResponse?.data;
};

const apiClient = { postTokensSwaps };

export default apiClient;
