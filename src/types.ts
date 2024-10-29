// * Interface for image data from the API
export interface ApiImage {
  id: string;
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

// * Interface in ImageGallery Open modal

export interface modalOpenData {
  url: string;
  name: string;
}
