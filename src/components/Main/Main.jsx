import VideoDetails from "../VideoDetails/VideoDetails";
import Playlist from "../Playlist/Playlist";


function Main() {
    return (
        <main className="video">
            <video className="video__hero"></video>
            <div className="video__body">
                <VideoDetails />
                <Playlist />
            </div>
        </main>
    )
}

export default Main;