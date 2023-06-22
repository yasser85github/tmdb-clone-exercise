import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "d9d88fbb26850c61d46a7801aaaedcc1",
  },
});
