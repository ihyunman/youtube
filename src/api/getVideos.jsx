import axios from "axios";

export default async function getVideos({ queryKey }) {
  const type = queryKey[1];
  const keyword = queryKey[2];
  // return keyword
  //   ? await axios
  //       .get(
  //         `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_KEY}`
  //       )
  //       .then((res) => res.data.items)
  //   : await axios
  //       .get(`https://ihyunman.github.io/youtube/items/${type}.json`)
  //       .then((res) => res.data.items);
  return await axios
    .get(`https://ihyunman.github.io/youtube/items/${type}.json`)
    .then((res) => res.data.items);
}

async function hotOrSearchVideos(searchText) {
  let data = [];
}
// export default async function searchVideos({searchText}) {

// }
//search videos
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
//hot trand videos
//https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]
