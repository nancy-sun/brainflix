import React from "react";
import VideoContext from "../VideoContext/VideoContext";
import Playlist from "../Playlist/Playlist";
import videoDetails from "../../data/video-details.json";
import "./Main.scss";
import getVideosList from "../../utils/APIUtils";
import axios from "axios";

export default class Main extends React.Component {

    state = {
        currentVideo: {},
        videoList: []
    }

    componentDidMount() {
        getVideosList(this);
    }

    getVideoDetails = (videoID) => {
        axios.get(`https://project-2-api.herokuapp.com/videos/${videoID}?api_key=830df12b-8e7e-4107-8b33-1f3d5c527e44`
        )
            .then(response =>
                this.setState({ currentVideo: response.data })
            ).catch(e => console.log(e))
    }

    componentDidUpdate(prevProps, prevState) {
        let current = this.props.match.params.videoID;
        if (current && prevState.currentVideo.videoID != current) {
            console.log(current);
            // this.getVideoDetails(this.props.match.params.videoID);
        }
    }

    render() {
        const { currentVideo } = this.state;
        console.log(currentVideo);

        return (
            <main className="video" >
                <video controls poster={currentVideo.image} className="video__hero">
                    <source src={currentVideo.video + "?api_key=cats"} type="video/mp4" />
                </video>
                <div className="video__body">
                    {/* <VideoContext {...currentVideo} /> */}
                    <Playlist videoList={this.state.videoList} currentVideo={currentVideo} getVideosList={this.getVideosList} />
                </div>
            </main>
        )
    }
}

