import "./UploadPage.scss";
import { Link } from "react-router-dom";

export default function UploadPage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title;
        const description = form.description;
        const video = form.video;

        if (!title.value || !description.value || !video.value) {
            alert("please choose a video file and give it a title and description");
            title.classList.add("upload__form-invalid");
            video.classList.add("upload__form-invalid");
            description.classList.add("upload__form-invalid");
            console.log(form.title.className)
            return;
        }

        alert("video uploaded🎉");
        window.location.replace("/");
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