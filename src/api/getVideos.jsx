import axios from "axios";

export default async function getVideos({ queryKey }) {
  const keyword = queryKey[1];
  return keyword
    ? await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
        )
        .then((res) => res.data.items)
    : await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`
        )
        .then((res) => res.data.items);
}
