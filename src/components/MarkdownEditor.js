import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setHtml(marked.parse(markdown));
    setLoading(false);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter Markdown here..."
      />

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </>
  );
};

export default MarkdownEditor;
