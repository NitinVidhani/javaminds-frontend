import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { editorFormats, editorModules } from '../util/utils'
import "react-quill/dist/quill.snow.css"

const Editor = ({ content, setContent }) => {
    const handleBodyChange = (e) => {
        setContent(e)
    }
    return (
        <div className='editor'>
            <ReactQuill
                theme='snow'
                placeholder='Write Something Informational...'
                modules={editorModules}
                formats={editorFormats}
                onChange={handleBodyChange}
                value={content}
            />
        </div>
    )
}

export default Editor