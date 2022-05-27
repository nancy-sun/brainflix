import "./Playlist.scss";
import videoDetails from "../../data/video-details.json";

export default function Playlist({ videoList, changeVideoList, currentVideo, changeCurrentVideo }) {
    return (
        <section className="playlist">
            <p className="playlist__title">next videos</p>
            <ul className="playlist__list">
                {videoList.filter(video => video.id !== currentVideo.id).map(video => {
                    console.log(video);
                    return (
                        <li key={video.id}>
                            <a className="playlist__item" onClick={() => {
                                changeVideoList(videoList);
                                videoDetails.forEach((videoObj) => {
                                    if (videoObj.id === video.id) {
                                        changeCurrentVideo(videoObj);
                                    }
                                })
                            }}>
                                <div className="playlist__cover" style={{
                                    backgroundImage: `url(${video.image})`
                                }}></div>
                                <div className="playlist__info">
                                    <p className="playlist__title">{video.title}</p>
                                    <p className="playlist__channel">{video.channel}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}