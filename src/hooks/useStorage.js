import {useState, useEffect} from "react";
import {projectStorage} from "../firebase/config";

const useStorage = (file) => {
    const [porgress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on(
            "state_changed", 
            (snapshot) => {
                const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            }, 
            (error) => {
                setError(error);
            }, 
            async () => {
                const url = await storageRef.getDownloadURL();
                setUrl(url);
        })

    }, [file]);

    return {porgress, url, error}
}

export default useStorage;