import { VideoCategory, VideoType } from "src/app/types/video";

export const videoCategoryMock: VideoCategory[] = [{
  categoryKey: 'front-end',
  videos: [
    {
      title: 'Learn the basics of HTML',
      lector: 'Jogn Doe',
    },
    {
      title: 'Learn the basics of CSS',
      lector: 'Jogn Doe',
    },
    {
      title: 'Module Bundlers: Vite',
      lector: 'Jogn Doe',
    },
    {
      title: 'Web Security Basics',
      lector: 'Jogn Doe',
    },
    {
      title: 'Web APIs',
      lector: 'Jogn Doe',
    },
    {
      title: 'Static Site Generators',
      lector: 'Jogn Doe',
    }
  ],
}];

export const getVideosByCategoryTest = (categoryKey: string): VideoCategory => {
  return videoCategoryMock.filter((item: VideoCategory) => item.categoryKey == categoryKey)[0];
}

export const getVideoTitles = (categoryKey: string): string[] => {
  const data: VideoCategory = getVideosByCategoryTest(categoryKey);
  const videos = data.videos;
  
  return videos.reduce((acc: string[], curr: VideoType) => {
      return [...acc, curr.title]
    }, []);
}
