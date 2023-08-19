import React, { useState } from 'react';
import ShareButton from './ShareButton';

const Share = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <ShareButton file={selectedFile} />}
    </div>
  );
};

export default Share;
