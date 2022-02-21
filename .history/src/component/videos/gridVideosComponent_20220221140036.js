
import  React,{useState , useEffect} from 'react';

export default function GridVideosComponent({themesId,listeVideo}) {
    // const [listeVideos, setListeVideos] = useState([]);

    console.log(listeVideo)
  return (
    <>
    {listeVideo.filter((vid)=> vid.theme.id === themesId).map((video) => 
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