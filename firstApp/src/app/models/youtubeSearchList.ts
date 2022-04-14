export interface SearchList {
  etag: string;
  items: SearchListItem[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  regionCode: string;
}

export interface SearchListItem {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
}
