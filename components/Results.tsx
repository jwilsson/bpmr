import React from 'react';

import { Track } from '../types/track';

type Props = {
    error?: Error,
    isLoading: Boolean,
    tracks: Track[],
};

const Results = ({ error, isLoading, tracks }: Props) => {
    if (isLoading) {
        return <p className="my-4 text-center">Loading...</p>;
    }

    if (error) {
        return <p className="my-4 text-center">Error!</p>;
    }

    tracks = [...tracks].sort((a, b) => {
        if (a.audioFeatures.tempo === b.audioFeatures.tempo) {
            return 0;
        }

        return a.audioFeatures.tempo > b.audioFeatures.tempo ? -1 : 1;
    });

    return (
        <div>
            {tracks.map((track) => {
                return (
                    <article key={track.id} className="border-b-2 border-current flex items-center justify-between my-3 py-2">
                        <div className="flex flex-col">
                            <span>{track.name}</span>
                            <span>{track.artists.map((a) => a.name).join(', ')}</span>
                            <span>{track.album.name}</span>
                            <span>{Math.round(track.audioFeatures.tempo)} BPM</span>

                            <div className="my-3">
                                <a href={track.externalUrls.spotify}>Listen on Spotify</a>
                            </div>
                        </div>

                        {track.album.images[0] && (
                            <figure className="">
                                <img src={track.album.images[0].url} alt={`${track.album.name} album cover`} height="112" width="112" />
                            </figure>
                        )}
                    </article>
                );
            })}
        </div>
    );
};

export default Results;
