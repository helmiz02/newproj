
import videos from "../../utils/videos.json"
import  React,{useState , useEffect} from 'react';

export default function GridVideosComponent({themeID}) {
    const [listeVideos, setListeVideos] = useState([]);

    console.log(themeID)

    useEffect(() => {
      if(themeID){
        setListeVideos(videos.filter((vid)=> vid.theme === themeID))
      }

    },[themeID]);
  return (
    <>
    {listeVideos.map((video) => 
    <div key={video.id}>
    {/* <video width="400"  preload="metadata">
    <source src={video.urlLecture} type="video/mp4" />
    </video> */}
    <img src={video.logo} alt={video.title} />
    {console.log(video)}
    </div>
    )}

    </>
  );
}