"use client"

import React, { Fragment, useState } from 'react'
import { VideoType } from '@/types/api'

const changeToSeen = async (slug: string) => {
    await fetch('/api/changeToSeen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })

    })
}

export const Video = ({ video }: { video: VideoType }) => {
    const [watching, setWatching] = useState<boolean>(false)
    const genres = video.genres.map((genre) => genre.name)

    return (
        <div>

            {!watching && (
                <Fragment>
                    <img className="w-full h-full left-0 object-cover absolute top-0" src={video.thumbnail.url} alt={video.title} />
                    <div className="absolute left-0 p-10 bottom-0 bg-opacity-40 bg-black">
                        {genres.join(', ')}
                        <p> {video.description} </p>
                        <a className="block" href="/">Go back</a>
                        <button className="absolute" onClick={() => {
                            changeToSeen(video.slug)
                            watching ? setWatching(false) : setWatching(true)
                        }}>PLAY</button>
                    </div>
                </Fragment>
            )}
            {watching && (
                <div className='bg-black bg-opacity-75 w-full h-full absolute left-0 top-0 flex justify-center'>
                    <span onClick={() => setWatching(false)} className='bg-white rounded-full w-8 h-8 absolute top-4 right-4 text-black flex justify-center z-20 cursor-pointer items-center'>x</span>
                    <video className="relative z-10" controls autoPlay>
                        <source src={video.mp4.url} type="video/mp4" />
                    </video>
                </div>

            )}
        </div>
    )
}
