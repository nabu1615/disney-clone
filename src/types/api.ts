export interface VideoResponse {
    video: Video;
}

export interface VideosResponse {
    videos: Video[]
}

export interface Video {
    createdAt: Date;
    id: string;
    title: string;
    description: string;
    seen: null;
    slug: string;
    tags: string[];
    mp4: Mp4;
    thumbnail: Thumbnail;
}

export interface Mp4 {
    url: string;
}

export interface Thumbnail {
    url: string;
}
