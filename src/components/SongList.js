import React from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs}) => {
    if(!songs){
        return(
            <h1>Loading.....</h1>
        )
    } 
    return(
        <div>
        {songs.map((song, index) => {
            return(
                <div>
                    <li key={index}>{index + 1}. {song.title.label} {song.image}</li>
                    <SongDetail song = {song}></SongDetail>
                </div>
                )
            })}
        </div>
    )
};

export default SongList;

