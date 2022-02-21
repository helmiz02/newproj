
import  React from 'react';

export default function GridVideosComponent({themesId,listeVideo}) {
  
    console.log(listeVideo)
  return (
    <>
    {listeVideo.filter((vid)=> vid.theme.id === themesId).map((video) => 
    <div key={video.id}>
    <img src={video.logo} alt={video.title} className="Rectangle" />
    {console.log(video)}
    </div>
    )}

    </>
  );
}