import axios from 'axios';
import { FetchResponse } from '../types';

const ACCESS_KEY = 'SWDc7mujCfg9Nkb-PmhHSgyUconIpKlvM5arVkmA48k';

export const fetchArticles = async (
  page: number = 1,
  query: string
): Promise<FetchResponse> => {
  const { data } = await axios.get<FetchResponse>(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&page=${page}&query=${query}`
  );

  return data;
};
