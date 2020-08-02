import React, { useState } from "react";
import ProgressBar from "./UploadForm/ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const allowedTypes = ["image/jpeg", "image/png"];

    const handleChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile && allowedTypes.includes(selectedFile.type)) {
            setFile(selectedFile)
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (JPEG or PNG)")
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;