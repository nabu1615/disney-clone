import { getVideo } from "@/utils/api";

const Video = async ({ params }: { params: { slug: string } }) => {
    const video = await getVideo(params.slug)

    return (
        <>
            <div className="app"> <img src={video.thumbnail.url} alt="" /> </div>
        </>

    )
}

export default Video;