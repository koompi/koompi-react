import React from "react"
import ReactQuill from "react-quill" // ES6
import "react-quill/dist/quill.snow.css" // ES6

function QuillTextEditor(props) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link"],
      ["clean"],
    ],
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
  ]
  return (
    <ReactQuill
      formats={formats}
      modules={modules}
      onChange={props.handleDescChange}
      defaultValue={props.defaultValue}
      preserveWhitespace={true}
    />
  )
}

export default QuillTextEditor
