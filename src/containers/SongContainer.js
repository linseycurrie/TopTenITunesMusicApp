import React, { useEffect, useState } from 'react';
import SongList from '../components/SongList';
import SongDetail from '../components/SongDetail';

const SongContainer = () => {

    const [songs, setSongs] = useState([]);
    const [selectedSongId, setSelectedSongId] = useState(1);
    const [loaded, setLoaded] =useState(false);


    const getSongs = () => {
        console.log("getting songs");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
        .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs();
    }, [selectedSongId]);

    return(
        <>
        <SongList songs={songs}></SongList>
   

        </>
    )
}

export default SongContainer;