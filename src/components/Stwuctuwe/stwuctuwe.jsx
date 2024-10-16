import './stwuctuwe.css'

export default function Stwuctuwe() {
    const dir = `.github/
        dependabot.yml
        workflows/
                  buildndeploy.yml

public/
       index.html
       main.js
       preload.js

src/
    App.js
    index.js
    index.css
    components/
               Hewwo/
                     hewwo.jsx
                     hewwo.css

               Tutowial/
                        tutowial.jsx
                        tutowial.css
                        
               Stwucture/
                         stwucture.jsx
                         stwuctuwe.css`
    return (
        <pre dangerouslySetInnerHTML={{__html: dir}} id='structure'/>
    )
}