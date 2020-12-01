import React from 'react';

const SongDetail = ({song}) => {

    if(!song){
        return(
            <p>Loading....</p>
        )
    }
    return(
        <>
            <h5 className="class-detail">{song.category.attributes.label}</h5>
        </>
    )
}

export default SongDetail;