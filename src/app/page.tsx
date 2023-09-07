import { Section } from '@/components/Section';
import { Genre, Video } from '@/types/api';
import { getGenres, getVideos } from '@/utils/api';
import Image from 'next/image'

type filterVideosType = (videos: Video[], genre: any) => Video[]

const filterVideos: filterVideosType = (videos, genre) => {
  return videos.filter((video) => {
    const genres = video.genres.map((genre) => genre.name);
    return genres.includes(genre)
  });
}

const Home = async () => {
  const videos = await getVideos();
  const { thumbnail, title } = videos[Math.floor(Math.random() * videos.length)]
  const genres = await getGenres();

  return (
    <main className="flex min-h-screen flex-col p-12">
      <Image
        src="/disney_logo.png"
        width={150}
        height={150}
        alt="Picture of the author"
        className='mb-10'
      />
      <div className="video-image w-full h-[50vh] overflow-hidden relative">
        <img className="w-full object-cover object-center" src={thumbnail.url} alt={title} />
      </div>
      <div className="video-feed mt-6 w-full">
        {genres.map((genre: Genre) => {
          return <Section genre={genre.name} videos={filterVideos(videos, genre.name)} />
        })}
      </div>
    </main>
  )
}

export default Home;

