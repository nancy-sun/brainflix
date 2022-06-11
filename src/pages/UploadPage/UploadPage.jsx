import "./UploadPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { VIDEOS_URL } from "../../utils/APIUtils";
import uploadImg from "../../assets/images/upload-video-preview.jpg";

export default function UploadPage() {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValidSubmit(e)) {
            axios.post(VIDEOS_URL, {
                title: e.target.title.value,
                description: e.target.description.value,
                image: uploadImg
            }).then(() => {
                e.target.reset();
                alert("video uploaded🎉");
                window.location.replace("/");
            }).catch(e => console.log(e))
        } else {
            alert("please choose a video file and give it a title and description");
            return;
        }
    }

    const isValidSubmit = (e) => {
        const form = e.target;
        const title = form.title;
        const description = form.description;

        if (!title.value || !description.value) {
            title.classList.add("upload__form-invalid");
            description.classList.add("upload__form-invalid");
            return false;
        } else {
            return true;
        }
    }

    return (
        <div className="upload">
            <h1 className="upload__headline">Upload Video</h1>
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className="upload__content">
                    <label htmlFor="video" className="upload__label">
                        video thumbnail
                        <input type="file" name="video" id="video" accept="video/*" className="upload__video" />
                    </label>
                    <div className="upload__info">
                        <label htmlFor="title" className="upload__label">
                            title your video
                            <input type="text" name="title" id="title" placeholder="Add a title to your video" className="upload__title" />
                        </label>
                        <label htmlFor="description" className="upload__label"  >
                            add a video description
                            <textarea name="description" id="description" placeholder="Add a description to your video" className="upload__description"></textarea>
                        </label>
                    </div>
                </div>
                <div className="upload__buttons">
                    <button className="upload__publish">publish</button>
                    <Link to="/" className="upload__cancel">
                        cancel
                    </Link>
                </div>
            </form>
        </div>
    )
}