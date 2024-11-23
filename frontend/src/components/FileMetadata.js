import React from "react";

const FileMetadata = ({ metadata }) => {
  if (!metadata) return null;

  return (
    <div>
      <h3>File Metadata</h3>
      <ul>
        <li>
          <strong>Name:</strong> {metadata.name}
        </li>
        <li>
          <strong>Size:</strong> {metadata.size} bytes
        </li>
        <li>
          <strong>Type:</strong> {metadata.type}
        </li>
      </ul>
    </div>
  );
};

export default FileMetadata;
