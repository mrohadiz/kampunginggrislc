"use client"

import YouTube from 'react-youtube';

export default function YoutubePlayer({ videoId }: any) {
    const onReady = (event: any) => {
        const player = event.target;
        player.playVideo();
    };

    const onError = (error: any) => {
        console.error('YouTube Player Error:', error);
    };

    return (
        <YouTube
            videoId={videoId}
            onReady={onReady}
            onError={onError}
        />
    );

}