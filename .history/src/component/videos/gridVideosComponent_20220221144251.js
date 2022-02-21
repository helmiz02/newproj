
import  React from 'react';
import "./style.css"
export default function GridVideosComponent({themesId,listeVideo}) {
  
    console.log(listeVideo)
  return (
    <>
    {listeVideo.filter((vid)=> vid.theme.id === themesId).map((video) => 
    <div key={video.id} className="imgContainer" >
    <img src={video.logo} alt={video.title} className="Rectangle" />
    <div class="Rectangle-Copy-2">
       <span className="Inauguration-batimen"> {video.title} </span>
    </div>
    </div>
    )}

    </>
  );
}