export type VideoType = {
    title: string;
    lector: string;
}

export type VideoCategory = {
    categoryKey: string;
    videos: VideoType[];
}
