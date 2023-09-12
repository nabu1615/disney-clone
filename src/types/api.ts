export interface VideoResponse {
    video: VideoType;
}

export interface VideosResponse {
    videos: VideoType[]
}

export interface Genre {
    name: string
}

export interface Genres {
    genres: Genre[]
}

export interface VideoType {
    createdAt: Date;
    id: string;
    title: string;
    description: string;
    seen: boolean | null;
    slug: string;
    genres: Genre[];
    mp4: Mp4;
    thumbnail: Thumbnail;
}

export interface Mp4 {
    url: string;
}

export interface Thumbnail {
    url: string;
}
