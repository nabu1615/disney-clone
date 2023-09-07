import { Genre, Genres, VideoResponse, VideosResponse } from "@/types/api";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = process.env.ENDPOINT || '';
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
  }
})

export const getGenres = async () => {
  const genresQuery = gql`
    query {
      genres {
        name
      }
    }
  `
  const data: Genres = await graphQLClient.request(genresQuery);

  return data.genres;
}

export const getVideo = async (pageSlug: string) => {
  const videoQuery = gql`
    query($pageSlug: String!) {
      video(where: {
        slug: $pageSlug
      }) {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        genres {
          name
        }
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

  const variables = {
    pageSlug
  }

  const data: VideoResponse = await graphQLClient.request(videoQuery, variables);

  return data.video;
}

export const getVideos = async () => {
  const videosQuery = gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        genres {
          name
        }
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

  const data: VideosResponse = await graphQLClient.request(videosQuery);

  return data.videos;
}