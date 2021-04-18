import React from 'react';
import LibrarySong from "./LibrarySong";





const Library = ({songs,setCurrentSong,audioRef,setSongs,isPlaying,libraryStatus})=>{





    return(
        <div className= {`library ${libraryStatus ? 'active-library': ''}`}>
            <h1>Library</h1>
            <div className= "library-songs">
                {songs.map((song)=>(
                <LibrarySong  setCurrentSong={setCurrentSong}
                songs={songs} song={song}
                id={song.id}
                key={song.id}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}

                />
                ))}
            </div>
        </div>
        

    );
};

export default Library;