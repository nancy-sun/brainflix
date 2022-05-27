import "./Playlist.scss";

export default function Playlist({ videoList, changeVideoList, currentVideo, changeCurrentVideo }) {
    return (
        <section className="playlist">
            <p className="playlist__title">next videos</p>
            <ul className="playlist__list">
                {videoList.filter(video => video.id !== currentVideo.id).map(videoObj => {
                    return (
                        <li key={videoObj.id}>
                            <a className="playlist__item" onClick={() => {
                                changeCurrentVideo(videoObj);
                                changeVideoList(videoList);
                            }}>
                                <div className="playlist__cover" style={{
                                    backgroundImage: `url(${videoObj.image})`
                                }}></div>
                                <div className="playlist__info">
                                    <p className="playlist__title">{videoObj.title}</p>
                                    <p className="playlist__channel">{videoObj.channel}</p>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}