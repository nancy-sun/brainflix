import videoDetails from "../../data/video-details.json";
import { Link } from "react-router-dom";
import "./Playlist.scss";

export default function Playlist({ videoList, getVideosList, currentVideo, getVideoDetails }) {
    return (
        <section className="playlist">
            <p className="playlist__headline">next videos</p>
            <ul className="playlist__list">
                {videoList.filter(video => video.id !== currentVideo.id).map(video => {
                    return (
                        <li key={video.id}>
                            <Link to={`/${video.id}`} className="playlist__item" onClick={() => {
                                getVideosList();
                                videoDetails.forEach((videoObj) => {
                                    if (videoObj.id === video.id) {
                                        getVideoDetails(videoObj.id);
                                    }
                                })
                            }}>
                                <div className="playlist__cover" style={{ backgroundImage: `url(${video.image})` }}></div>
                                <div className="playlist__info">
                                    <p className="playlist__title">{video.title}</p>
                                    <p className="playlist__channel">{video.channel}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}