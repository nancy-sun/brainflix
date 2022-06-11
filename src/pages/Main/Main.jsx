import React from "react";
import VideoContext from "../../components/VideoContext/VideoContext";
import Playlist from "../../components/Playlist/Playlist";
import "./Main.scss";
import axios from "axios";
import { API_URL, VIDEOS_URL } from "../../utils/APIUtils";

export default class Main extends React.Component {

    state = {
        currentVideo: {},
        videoList: [],
    }

    submitComment = (event) => {
        event.preventDefault();
        if (!event.target.comment.value) {
            event.target.comment.classList.add("comment__invalid");
            return;
        }
        event.target.comment.classList.remove("comment__invalid");
        axios.post(`${VIDEOS_URL}/${this.state.currentVideo.id}/comments`,
            {
                comment: event.target.comment.value
            }).then(() => {
                this.getCurrentVideo(this.state.currentVideo.id);
                event.target.reset();
            }).catch(e => alert(e));
    }

    getVideosList = () => {
        axios.get(VIDEOS_URL)
            .then(response => {
                this.setState({ ...this.state.currentVideo, videoList: response.data });
                if (!this.props.match.params.videoID) {
                    this.getCurrentVideo(response.data[0].id)
                }
            }
            ).catch(e => console.log(e))
    }

    getCurrentVideo = (videoID) => {
        axios.get(`${VIDEOS_URL}/${videoID}`)
            .then(response => {
                this.setState({ ...this.state.videoList, currentVideo: response.data });
            }).catch(e => console.log(e))
    }

    likeVideo = (videoID) => {
        axios.put(`${VIDEOS_URL}/${videoID}/likes`)
            .then(response => {
                this.setState({ ...this.state.videoList, currentVideo: response.data });
            })
    }

    deleteComment = (commentID) => {
        axios.delete(`${VIDEOS_URL}/${this.state.currentVideo.id}/comments/${commentID}`)
            .then(() => {
                this.getCurrentVideo(this.state.currentVideo.id);
            }).catch((e) => alert(e))
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
                <figure>
                    <video poster={currentVideo.image} className="video__hero" controls>
                        <source src={`http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4`} type="video/mp4" />
                    </video>
                </figure>
                <div className="video__body">
                    <VideoContext {...currentVideo} submitComment={this.submitComment} deleteComment={this.deleteComment} likeVideo={this.likeVideo} />
                    <Playlist videoList={this.state.videoList} currentVideo={currentVideo} />
                </div>
            </main >
        )
    }
}

