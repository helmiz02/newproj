
import videos from "../../utils/videos.json"

export default function GridVideosComponent({themeID}) {

  return (
    <>
    {videos.filter((vid)=> vid.theme === themeID).map(video => (
    <div key={video.id}>
    <video width="400"  preload="metadata">
    <source src={video.urlLecture} type="video/mp4" />
    </video>
    </div>
    )}

    </>
  );
}