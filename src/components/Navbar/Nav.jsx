import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/" className="nav__logo"></Link>
            <div className="nav__search-wrap">
                <form>
                    <label>
                        <input className="nav__search" type="text" placeholder="Search" />
                    </label>
                </form>
                <div className="nav__avatar"></div>
            </div>
            <button className="nav__button">
                <Link to="/upload">
                    upload
                </Link>
            </button>
        </nav>
    )
}


