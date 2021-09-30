import axios from "axios";

const KEY = "AIzaSyC27ddWmRAKrkzXsjW0bh9__QuVj4wyysk"; //Put your own Key here.

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
  headers: {},
});
