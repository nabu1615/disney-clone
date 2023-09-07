'use client'

import { Thumbnail } from '@/types/api'
import { useRouter } from 'next/navigation'
import React from 'react'

type CardType = {
    thumbnail: Thumbnail,
    title: string,
    url: string
}

export const Card = ({ thumbnail, title, url }: CardType) => {
    const router = useRouter()

    const handleClick = (url: string) => {
        router.push(`video/${url}`)
    }

    return (
        <div className="rounded-sm w-36 mb-5 cursor-pointer" onClick={() => handleClick(url)}>
            <img className="object-cover" src={thumbnail.url} alt={title} />
        </div>

    )
}
