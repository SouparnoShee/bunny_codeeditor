import React, { useEffect, useState } from 'react'
import "./styles.scss"
import Editor from '../components/Editor'
import useLocalStorage from '../hooks/useLocalStorage'

const Home = () => {
    const [html, setHtml] = useLocalStorage('xml', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [javascript, setJavascript] = useLocalStorage('javascript', '')
    const [srcDoc, setSrcDoc] = useState('')




    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
            </html>
        
        `)

            return () => clearTimeout(timeout)
        }, 250);
    }, [html, css, javascript])


    return (
        <>
            <div className="pane top-pane">
                <Editor
                    displayname={"HTML"}
                    language="xml"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    displayname={"CSS"}
                    language="css"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    displayname={"Javascript"}
                    language="javascript"
                    value={javascript}
                    onChange={setJavascript}
                />


            </div>
            <div className="pane">
                <iframe
                    title='output'
                    srcDoc={srcDoc}
                    sandbox='allow-scripts'
                    width="100%"
                    height="100%"
                    className='iframe'
                />
            </div>
        </>
    )
}

export default Home
