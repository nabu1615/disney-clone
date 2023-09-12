import { NavBar } from '@/components/NavBar';
import { Section } from '@/components/Section';
import { Genre, VideoType } from '@/types/api';
import { getGenres, getVideos } from '@/utils/api';

type filterVideosType = (videos: VideoType[], genre: any) => VideoType[]

const filterVideos: filterVideosType = (videos, genre) => {
  return videos.filter((video) => {
    const genres = video.genres.map((genre) => genre.name);
    return genres.includes(genre)
  });
}

const unSeenVideos: filterVideosType = (videos) => {
  return videos.filter((video) => video.seen === false || video.seen === null)
}

const Home = async () => {
  const videos = await getVideos();
  const { thumbnail, title } = videos[Math.floor(Math.random() * videos.length)]
  const genres = await getGenres();

  return (
    <>
      <div className="video-image w-full h-[50vh] overflow-hidden contents">
        <img className="w-full h-full object-cover object-center" src={thumbnail.url} alt={title} />
      </div>
      <div className='mt-8'>
        <Section genre="Recommended Videos" videos={unSeenVideos(videos, "Recommended Videos")} />
      </div>
      <div className="video-feed mt-6 w-full">
        {genres.map((genre: Genre) => {
          return <Section key={genre.name} genre={genre.name} videos={filterVideos(videos, genre.name)} />
        })}
      </div>
    </>
  )
}

export default Home;

