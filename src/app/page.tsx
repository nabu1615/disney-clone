import { getVideos } from '@/utils/api';

const Home = async () => {

  const videos = await getVideos();

  const randomVideo = videos[Math.floor(Math.random() * videos.length)]

  console.log(randomVideo)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <img src={randomVideo.thumbnail.url} alt={randomVideo.title} />
    </main>
  )
}

export default Home;

