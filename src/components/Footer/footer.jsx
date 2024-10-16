import './footer.css';

export default function Footer() {
    return (
        <footer>
            <span>Created in 2024 with </span>
            <img id="heartemoji" src="https://em-content.zobj.net/source/twitter/154/heavy-black-heart_2764.png" draggable="false" alt="heart emoji" />
            <span> by kanshen from <span className="x">×</span><a className="deadcode" href="https://deadcode.is-a.dev">DEADCODE</a><span className="x">×</span></span>
            <span> · </span>
            <span>{process.env.NODE_ENV === "production" ? (<>clone <a href="https://github.com/DeadCodeGames/ReactJSBoilerplate4GHPages">here</a> :3</>) : "Running in DEVELOPMENT MODE"}</span>
        </footer>
    )
}