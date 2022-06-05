import React from "react";
import VideoContext from "../VideoContext/VideoContext";
import Playlist from "../Playlist/Playlist";
import "./Main.scss";
import axios from "axios";

const API_KEY = "830df12b-8e7e-4107-8b33-1f3d5c527e44";
const API_KEY_PARAM = "?api_key=" + API_KEY;
const API_URL = "https://project-2-api.herokuapp.com";
const VIDEOS_LIST_URL = `${API_URL}/videos${API_KEY_PARAM}`;

// `${API_URL}/videos/${this.state.currentVideo.id}/comments${API_KEY_PARAM}`
export default class Main extends React.Component {

    state = {
        currentVideo: {},
        videoList: [],
    }

    submitComment = (event) => {
        event.preventDefault();
        axios.post(`${API_URL}/videos/${this.state.currentVideo.id}/comments${API_KEY_PARAM}`,
            {
                name: "anonymous",
                comment: event.target.comment.value
            })
            .then(() => {
                this.getVideosList();
            }
            )
            .catch(e => alert(e));
    }

    deleteComment = (event) => {
        axios.delete(`${API_URL}/videos/${this.state.currentVideo.id}/comments/${event.target.id + API_KEY_PARAM}`)
            .then((response) => {
                console.log(response)
            }).catch((e) => alert(e))
    }


    getVideosList = () => {
        axios.get(VIDEOS_LIST_URL)
            .then(response => {
                this.setState({ ...this.state.currentVideo, videoList: response.data });
                if (!this.props.match.params.videoID) {
                    this.getCurrentVideo(response.data[0].id)
                }
            }
            ).catch(e => console.log(e))
    }

    getCurrentVideo = (videoID) => {
        axios.get(`${API_URL}/videos/${videoID + API_KEY_PARAM}`)
            .then(response => {
                this.setState({ ...this.state.videoList, currentVideo: response.data }); //i think need to add an if statement here to prevent it from keep updating
            }).catch(e => console.log(e))
    }

    componentDidMount() {
        this.getVideosList();
    }

    componentDidUpdate(prevProps, prevState) {
        let current = this.props.match.params.videoID;
        if (current && (prevState.currentVideo.id !== current)) {
            this.getCurrentVideo(current);
        } else if (!current && prevProps.match.params.videoID) {
            this.getVideosList();
        }
    }


    render() {
        const { currentVideo } = this.state;
        return (
            <main className="video" >
                <video controls poster={currentVideo.image} className="video__hero" autoPlay>
                    <source src={`${currentVideo.video}?api_key=cats`} type="video/mp4" />
                </video>
                <div className="video__body">
                    <VideoContext {...currentVideo} submitComment={this.submitComment} />
                    <Playlist videoList={this.state.videoList} currentVideo={currentVideo} />
                </div>
            </main>
        )
    }
}

