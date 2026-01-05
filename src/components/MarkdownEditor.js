import React, { useState, useEffect } from "react";
import marked from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState(
    "#Hello world"
  );
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(marked(markdown));
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </>
  );
};

export default MarkdownEditor;
