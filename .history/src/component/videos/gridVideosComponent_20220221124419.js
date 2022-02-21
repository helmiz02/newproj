
import videos from "../../utils/videos.json"
import  React,{useState , useEffect} from 'react';

export default function GridVideosComponent({themeID}) {
    const [listeVideos, setListeVideos] = useState([]);

    console.log(themeID)
    console.log(videos)

    useEffect(() => {
      if(videos){
        // setListeVideos(videos.filter((vid)=> vid.theme === themeID))
        setListeVideos(videos)
      }

    },[videos]);
  return (
    <div>
    {listeVideos.map((video) => 
    <div key={video.id}>
    {/* <video width="400"  preload="metadata">
    <source src={video.urlLecture} type="video/mp4" />
    </video> */}
    <img src={video.logo} alt={video.title} />
    {console.log(video)}
    </div>
    )}

    </div>
  );
}