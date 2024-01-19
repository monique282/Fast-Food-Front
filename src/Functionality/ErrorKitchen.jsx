import axios from "axios";

export default function updateError(code, setLoading, ready) {
  const urlError = `${import.meta.env.VITE_API_URL}/updateError`;
  const data = {
    code,
  };
  const promise = axios.post(urlError, data);
  promise.then((response) => {
    setLoading(true);
    ready(code);
  });
  promise.catch((err) => {
    console.log(err.response);
  });
}
