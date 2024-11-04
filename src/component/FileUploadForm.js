import React, { useState } from 'react';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  console.log(preview);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    // console.log(e.target.files);
    console.log(e.target.files);
    setFile(uploadedFile);
    // setPreview(URL.createObjectURL(uploadedFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`File ${file.name} uploaded successfully!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" onChange={handleFileChange} />
      </label>
      {preview && (
        <div>
          <p>Preview:</p>
          <img src={preview} alt="Preview" style={{ width: '100px', height: '100px' }} />
        </div>
      )}
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploadForm;