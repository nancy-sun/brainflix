function Playlist() {
    return (
        <section className="playlist">
            <p className="playlis__title">next videos</p>
            <ul className="playlist__list">
                <li className="playlist__item">
                    <div className="playlist__preview">test</div>
                    <div className="playlist__info">
                        <p className="playlist__name">test</p>
                        <p className="playlist__author">test</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Playlist;