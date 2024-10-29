// * Interface for image data from the API
export interface ApiImage {
  description: string;
  likes: number;
  urls: {
    small: string;
    full: string;
    [key: string]: string;
  };
  [key: string]: any;
}

// * Interface for the API search results

export interface FetchResponse {
  results: ApiImage[];
  total_pages: number;
  total: number;
}
