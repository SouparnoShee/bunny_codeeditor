import React, { useState } from 'react'
import "./styles.scss"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'



const Editor = (props) => {
    const { displayname, language, value, onChange } = props;
    const handleChange = (editor, data, value) => {
        onChange(value)
    }

    const [open, setOpen] = useState(true)
    return (
        <>
            <div className={`editor-container ${open ? '' : 'collapsed'}`}>
                <div className="editor-title">
                    <h4>{displayname}</h4>
                    <button className='button' onClick={() => setOpen(prevOpen => !prevOpen)}>
                        <FontAwesomeIcon
                            icon={open ? faCompressAlt : faExpandAlt}
                        />
                    </button>

                </div>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className='controlled-editor'
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        gutters: ['CodeMirror-lint-markers'],
                        theme: 'material'
                    }}
                />
            </div>
        </>
    )
}

export default Editor
