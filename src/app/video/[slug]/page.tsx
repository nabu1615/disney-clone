import { Video } from "@/components/Video";
import { getVideo } from "@/utils/api";

const VideoDetail = async ({ params }: { params: { slug: string } }) => {
    const video = await getVideo(params.slug)

    return (

        <Video video={video} />

    )
}

export default VideoDetail;