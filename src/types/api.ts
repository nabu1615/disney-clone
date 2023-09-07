export interface VideoResponse {
    video: Video;
}

export interface VideosResponse {
    videos: Video[]
}

export interface Genre {
    name: string
}

export interface Genres {
    genres: Genre[]
}

export interface Video {
    createdAt: Date;
    id: string;
    title: string;
    description: string;
    seen: null;
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
