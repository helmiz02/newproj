
import  React from 'react';
import "./style.css"
export default function GridVideosComponent({themesId,listeVideo}) {
  
    console.log(listeVideo)
  return (
    <>
    {listeVideo.filter((vid)=> vid.theme.id === themesId).map((video) => 
    <div key={video.id}>
    <img src={video.logo} alt={video.title} className="Rectangle">  <div class="Rectangle-Copy-2"> <span> {video.title} </span></div></img> 
   
    </div>
    )}

    </>
  );
}