import "./Playlist.scss";

export default function Playlist({ videoList, changeVideoList, currentVideo, changeCurrentVideo }) {
    return (
        <section className="playlist">
            <p className="playlist__title">next videos</p>
            <ul className="playlist__list">
                {videoList.filter(video => video.id !== currentVideo.id).map(video => {
                    return (
                        <li key={video.id}>
                            <a className="playlist__item" onClick={() => {
                                changeCurrentVideo(video);
                                changeVideoList(videoList);
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