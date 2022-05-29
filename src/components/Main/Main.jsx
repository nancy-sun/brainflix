import React from "react";
import VideoContext from "../VideoContext/VideoContext";
import Playlist from "../Playlist/Playlist";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./Main.scss";

export default class Main extends React.Component {

    state = {
        currentVideo: videoDetails[0],
        videoList: videos
    }

    changeCurrentVideo = (videoObj) => {
        this.setState({ currentVideo: videoObj });
    }

    changeVideoList = (videosArr) => {
        this.setState({ videoList: videosArr });
    }

    render() {
        return (
            <main className="video" >
                <video controls poster={this.state.currentVideo.image} className="video__hero">
                    <source src={this.state.currentVideo.video} type="video/mp4" />
                </video>
                <div className="video__body">
                    <VideoContext currentVideo={this.state.currentVideo} />
                    <Playlist videoList={this.state.videoList} currentVideo={this.state.currentVideo} changeVideoList={this.changeVideoList} changeCurrentVideo={this.changeCurrentVideo} />
                </div>
            </main>
        )
    }
}

