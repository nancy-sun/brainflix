import "./UploadPage.scss";
import { Link } from "react-router-dom";

export default function UploadPage() {
    return (
        <div className="upload">
            <h1 className="upload__headline">Upload Video</h1>
            <div className="upload__thumbnail-wrap">
                <p className="upload__thumbnail-title">video thumbnail</p>
                <div className="upload__thumbnail"></div>
            </div>
            <form className="upload__form">
                <label htmlFor="title" className="upload__label">
                    title your video
                    <input type="text" name="title" id="title" placeholder="Add a title to your video" className="upload__title" />
                </label>
                <label htmlFor="description" className="upload__label"  >
                    add a video description
                    <textarea name="description" id="description" placeholder="Add a description to your video" className="upload__description"></textarea>
                </label>
                <div className="upload__buttons">
                    <button className="upload__publish">publish</button>
                    <button type="button" className="upload__cancel">
                        <Link to="/">
                            cancel
                        </Link>
                    </button>
                </div>
            </form>
        </div>
    )
}