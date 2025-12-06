export interface DownloadProductItem {
  title: string;
  descriptions: string[];
  photo: string;
  platforms: {
    os: string;
    title: string;
    architectures: {
      title: string;
      links: {
        description: string;
        title: string;
        url: string;
      }[];
    }[];
  }[];
  videos: {
    url: string;
  }[];
  instructions: {
    title: string;
    platforms: {
      title: string;
      descriptions: string[];
    }[];
  };
}
