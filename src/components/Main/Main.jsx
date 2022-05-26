import React from "react";
import VideoDetails from "../VideoDetails/VideoDetails";
import Playlist from "../Playlist/Playlist";
import videos from "../../data/videos.json"
import videoData from "../../data/video-details.json";
import "./Main.scss"


export default class Main extends React.Component {

    state = {
        currentVideo: videoData[0],
        videoList: videos
    }

    changeCurrentVideo = (videoObj) => {
        this.setState({ currentVideo: videoObj });
    }


    render() {
        return (
            <main className="video" >
                <video controls poster={this.state.currentVideo.image} className="video__hero">
                    <source src={this.state.currentVideo.video} type="video/mp4" />
                </video>
                <div className="video__body">
                    <VideoDetails currentVideo={this.state.currentVideo} />
                    <Playlist />
                </div>
            </main>
        )
    }
}

