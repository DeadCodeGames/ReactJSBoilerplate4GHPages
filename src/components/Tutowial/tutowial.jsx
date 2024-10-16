import './tutowial.css';

export default function Tutowial() {
    return (
        <div className="checklist">
            <h2>🚀 Get Started with the React Boilerplate</h2>
            <ol>
                <li>
                    <input type="checkbox" disabled checked={process.env.NODE_ENV === "development"} /> Clone the repository:
                    <pre className="code">git clone https://github.com/DeadCodeGames/ReactJSBoilerplate4GHPages.git</pre>
                </li>
                <li>
                    <input type="checkbox" disabled checked={process.env.NODE_ENV === "development"} /> Navigate to the project folder:
                    <pre className="code">cd ReactJSBoilerplate4GHPages</pre>
                </li>
                <li>
                    <input type="checkbox" disabled checked={process.env.NODE_ENV === "development"} /> Install dependencies:
                    <pre className="code">npm install</pre>
                </li>
                <li>
                    <input type="checkbox" disabled checked={process.env.NODE_ENV === "development"} /> Start the development server:
                    <pre className="code">npm start</pre>
                    <p>It should automatically open <a href="http://localhost:3000" target="_blank" rel="noreferrer">http://localhost:3000</a> in your browser.</p>
                </li>
                <li>
                    <input type="checkbox" disabled /> Create your website!  
                </li>
                <li>
                    <input type="checkbox" disabled /> Enable GitHub Pages and commit!
                    <p style={{display: "flex", alignItems: "center", margin: 0, flexWrap: "wrap"}}>The bundled GitHub Actions script at<pre className="code" style={{margin: "0 8px"}}>.github/workflows/buildndeploy.yml</pre>builds your React website, and deploys it to GitHub Pages.</p>
                </li>
            </ol>
        </div>
    );
}