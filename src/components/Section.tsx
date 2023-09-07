import { Video } from '@/types/api'
import React from 'react'
import { Card } from './Card'

type SectionType = {
    genre: string
    videos: Video[]
}

export const Section = ({ genre, videos }: SectionType) => {
    return (
        <div className='video-genre'>
            <h3 className="mb-4 capitalize">{genre}</h3>
            <div className='flex gap-6'>
                {videos.map((video) => {
                    return (
                        <Card url={video.slug} thumbnail={video.thumbnail} title={video.title} />)
                })}
            </div>

        </div>
    )
}
