import React,{useState,useRef} from 'react';
import './styles/app.scss';
import Song from './components/Song';
import Player from './components/Player';
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";




function App() {



  const audioRef = useRef(null);
  const [songs,setSongs]=useState(data());
  const[currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] =useState(false);
  const timeHandler=(e)=>{
        const current =e.target.currentTime;
        const duration= e.target.duration;
        //calculate percentage
        const roundedCurrent = Math.round(current);
        const roundedDuration = Math.round(duration);
        const animation = Math.round((roundedCurrent/roundedDuration)*100)
        

        setSongInfo({...songInfo,currentTime:current, duration, animationPercentage:animation});
  };

  const[songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0,
        animationPercentage:0,
    });
  const [libraryStatus,setLibraryStatus]= useState(false);  


  const songEndHandler = async ()=>{
    let currentIndex = songs.findIndex((song)=> song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex+1)% songs.length]);
    if(isPlaying) audioRef.current.play();
    
  };






  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus
      } />
      <Song currentSong={currentSong}/>
      

      <Player audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>

      <Library songs={songs} setCurrentSong={setCurrentSong} audioRef={audioRef} 
      isPlaying={isPlaying} setSongs={
      setSongs} libraryStatus={libraryStatus}/>

      <audio onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}>
      </audio>
    </div>
  );
};

export default App;