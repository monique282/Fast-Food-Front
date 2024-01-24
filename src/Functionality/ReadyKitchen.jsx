import axios from "axios";

export default function updateReady(code, setLoading) {
    const urlRequest = `${import.meta.env.VITE_API_URL}/updateReady`;
    const data = {
      code,
    };
    const promise = axios.post(urlRequest, data);
    promise.then(() => {
      setLoading(true);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }