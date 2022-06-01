import React from "react";
import VideoContext from "../VideoContext/VideoContext";
import Playlist from "../Playlist/Playlist";
import videoDetails from "../../data/video-details.json";
import videos from "../../data/videos.json";
import "./Main.scss";

const API_KEY = "830df12b-8e7e-4107-8b33-1f3d5c527e44";
const API_KEY_PARAM = "?api_key=" + API_KEY;
const API_URL = "https://project-2-api.herokuapp.com";
const VIDEO_LIST_URL = `${API_URL}/videos${API_KEY_PARAM}`;
const VIDEO_DETAIL_URL = `${API_URL}/videos/:id${API_KEY_PARAM}`; //need to modify the :id

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
        const { currentVideo } = this.state;

        return (
            <main className="video" >
                <video controls poster={currentVideo.image} className="video__hero">
                    <source src={currentVideo.video} type="video/mp4" />
                </video>
                <div className="video__body">
                    <VideoContext currentVideo={currentVideo} />
                    <Playlist videoList={this.state.videoList} currentVideo={currentVideo} changeVideoList={this.changeVideoList} changeCurrentVideo={this.changeCurrentVideo} />
                </div>
            </main>
        )
    }
}

