import axios from "axios";

export default function updateDelete(code, setLoading) {
    const urlDelete = `${import.meta.env.VITE_API_URL}/updateDelete`;
    const data = {
      code,
    };
    const promise = axios.delete(urlDelete, { data });
    promise.then((response) => {
      setLoading(true);
    });
    promise.catch((err) => {
      console.log(err.response);
    });
  }