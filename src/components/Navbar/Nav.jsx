import "./Nav.scss";

export default function Nav() {
    return (
        <nav className="nav">
            <a href="/" className="nav__logo"></a>
            <div className="nav__search-wrap">
                <form>
                    <label>
                        <input className="nav__search" type="text" placeholder="Search" />
                    </label>
                </form>
                <div className="nav__avatar"></div>
            </div>
            <button className="nav__button">upload</button>
        </nav>
    )
}


